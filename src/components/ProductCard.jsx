import React, { useState } from "react";
import '../css/ProductDetail.css'
import Products from "./Products";
import Footer from "./Footer";
import {
  Star,
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Gift,
  Plus,
  Minus,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

// Skeleton Loader
const Skeleton = () => (
  <div className="animate-pulse flex flex-col md:flex-row gap-8 w-full">
    <div className="flex-1 flex flex-col items-center">
      <div className="relative w-full aspect-square bg-gray-200 rounded-lg mb-4" />
      <div className="h-6 w-24 bg-gray-200 rounded mb-2" />
    </div>
    <div className="flex-1 flex flex-col gap-4">
      <div className="h-8 w-3/4 bg-gray-200 rounded" />
      <div className="h-5 w-1/2 bg-gray-200 rounded" />
      <div className="h-6 w-1/3 bg-gray-200 rounded" />
      <div className="h-6 w-1/4 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
      <div className="h-4 w-1/3 bg-gray-200 rounded" />
      <div className="h-10 w-full bg-gray-200 rounded" />
      <div className="h-10 w-full bg-gray-200 rounded" />
    </div>
  </div>
);

const ProductDetailCard = () => {
  const { id } = useParams();
  const { selectedProduct } = useProduct();

  const [currentImg, setCurrentImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [gift, setGift] = useState(false);
  const [descOpen, setDescOpen] = useState(false);

  const navigate = useNavigate();

  // If no product is selected, show a helpful message
  if (!selectedProduct) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-500 text-lg mb-4">No product selected or product not found.</div>
        <button
          onClick={() => navigate("/product")}
          className="inline-block px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  // Fallback for images: support both array and single image string
  let images = [];
  if (Array.isArray(selectedProduct.images) && selectedProduct.images.length > 0) {
    images = selectedProduct.images;
  } else if (selectedProduct.image) {
    images = [selectedProduct.image];
  } else if (selectedProduct.imageUrl) {
    images = [selectedProduct.imageUrl];
  } else {
    images = ["https://via.placeholder.com/400x400?text=No+Image"];
  }

  // Fallbacks for other fields
  const title = selectedProduct.name || selectedProduct.title || "Product";
  const rating = selectedProduct.rating || 4.5;
  const numReviews = selectedProduct.numReviews || 120;
  const originalPrice = selectedProduct.originalPrice || (selectedProduct.price ? parseInt(selectedProduct.price.replace(/[^0-9]/g, "")) + 200 : 999);
  const discountedPrice = selectedProduct.discountedPrice || (selectedProduct.price ? parseInt(selectedProduct.price.replace(/[^0-9]/g, "")) : 799);
  const discountPercent = selectedProduct.discountPercent || Math.max(0, Math.round(100 - (discountedPrice / originalPrice) * 100));
  const sku = selectedProduct.sku || `SKU${id || ""}`;
  const offers = selectedProduct.offers || [
    "Free shipping on orders over ₹499",
    "Extra 10% off on your first order",
  ];
  const inStock = selectedProduct.inStock !== undefined ? selectedProduct.inStock : true;
  const description = selectedProduct.description || "No description available for this product.";
  const variants = selectedProduct.variants || "";

  // Handlers
  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted((prev) => !prev);
    // Optionally: update wishlist in context or backend
  };

  // Go back handler
  const handleGoBack = () => {
    navigate(-1);
  };

  // Optionally: Add to Bag and Buy Now handlers
  const handleAddToBag = () => {
    // Implement add to bag logic
    alert("Added to bag!");
  };

  const handleBuyNow = () => {
    // Implement buy now logic
    alert("Proceeding to buy now!");
  };

  const handleSeeAllOffers = () => {
    alert("Showing all offers!");
  };

  return (
    <>
    <div className="products-detail-container w-full  mx-auto bg-white rounded-lg shadow p-4 md:p-8 flex flex-col md:flex-row gap-8 relative">
      {/* Go Back Icon */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 z-20 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-all"
        aria-label="Go back"
        type="button"
      >
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Left: Image Carousel */}
      <div className="flex-1 flex flex-col items-center relative">
        <div className="relative w-full aspect-square max-w-md">
          {/* Carousel Image */}
          <img
            src={images[currentImg]}
            alt={`Product ${title}`}
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
          />
          {/* BUY 1 GET 1 Tag */}
          <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
            BUY 1 GET 1
          </span>
          {/* Carousel Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-pink-100 text-gray-700 rounded-full p-2 shadow transition z-10"
                onClick={handlePrev}
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-pink-100 text-gray-700 rounded-full p-2 shadow transition z-10"
                onClick={handleNext}
                aria-label="Next image"
                type="button"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentImg
                    ? "bg-pink-600"
                    : "bg-gray-300 hover:bg-pink-200"
                }`}
                onClick={() => setCurrentImg(idx)}
                aria-label={`Go to image ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Product Info */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{title}</h1>
        {/* Ratings & Reviews */}
        <div className="flex items-center gap-2 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={20}
              className={
                i <= Math.round(rating)
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">
            {rating.toFixed(1)} ({numReviews} reviews)
          </span>
        </div>
        {/* Price & Discount */}
        <div className="flex items-center gap-3 mb-1">
          <span className="text-gray-400 line-through text-lg">
            ₹{originalPrice.toLocaleString()}
          </span>
          <span className="text-pink-600 font-bold text-2xl">
            ₹{discountedPrice.toLocaleString()}
          </span>
          <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded ml-2">
            {discountPercent}% OFF
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-1">Inclusive of all taxes</div>
        {/* SKU */}
        <div className="text-xs text-gray-400 mb-2">
          SKU: <span className="font-medium text-gray-700">{sku}</span>
        </div>
        {/* Variants */}
        {variants && (
          <div className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Variants:</span> {variants}
          </div>
        )}
        {/* Offers */}
        <div className="flex flex-col gap-1 mb-2">
          {offers.map((offer, idx) => (
            <div key={idx} className="flex items-center text-green-700 text-sm font-medium gap-2">
              <CheckCircle size={16} className="stroke-green-600" />
              <span>{offer}</span>
            </div>
          ))}
          <button
            className="text-pink-600 text-xs font-semibold underline mt-1 w-fit hover:text-pink-800 transition"
            onClick={handleSeeAllOffers}
            type="button"
          >
            See All Offers
          </button>
        </div>
        {/* In Stock */}
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle size={18} className="stroke-green-600" />
          <span className="text-green-700 text-sm font-semibold">
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        {/* Gift Option */}
        <label className="flex items-center gap-2 cursor-pointer select-none mb-2">
          <input
            type="checkbox"
            checked={gift}
            onChange={() => setGift((g) => !g)}
            className="accent-pink-600 w-4 h-4"
          />
          <Gift size={18} className="stroke-pink-600" />
          <span className="text-sm text-gray-700">
            This is a gift <span className="ml-1">🎁</span>
          </span>
        </label>
        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex gap-2">
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg px-4 py-3 transition text-base shadow"
              onClick={handleAddToBag}
              type="button"
            >
              Add to Bag
              <ArrowRight size={18} className="ml-1" />
            </button>
            <button
              className={`flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-pink-600 rounded-lg px-3 py-3 transition shadow ${
                wishlisted ? "bg-pink-50" : ""
              }`}
              onClick={handleWishlist}
              aria-label="Add to wishlist"
              type="button"
            >
              <Heart
                size={22}
                className={`transition ${
                  wishlisted
                    ? "fill-pink-600 stroke-pink-600"
                    : "stroke-gray-400"
                }`}
              />
            </button>
          </div>
          <button
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold rounded-lg px-4 py-3 transition text-base shadow"
            onClick={handleBuyNow}
            type="button"
          >
            Buy It Now
          </button>
        </div>
        {/* Accordion: Description */}
        <div className="mt-6 border-t pt-4">
          <button
            className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 hover:text-pink-600 transition"
            onClick={() => setDescOpen((o) => !o)}
            type="button"
            aria-expanded={descOpen}
          >
            Description
            {descOpen ? (
              <Minus size={22} className="ml-2" />
            ) : (
              <Plus size={22} className="ml-2" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              descOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-gray-700 text-sm">{description}</div>
          </div>
        </div>
      </div>
    </div>
   <Products />
   <Footer />
    </>
  );
};

export default ProductDetailCard;
