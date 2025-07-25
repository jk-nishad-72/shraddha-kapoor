
import React, { useState } from "react";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

// NOTE: To fix images not showing, use public folder paths ("/productimages/2.jpeg" etc.)
// In React, images in the public folder should be referenced with a leading slash.

const mockProducts = [
  {
    id: 1,
    imageUrl: "/productimages/2.jpeg",
    hoverImageUrl: "/productimages/h2.jpeg",
    title: "Antique Kundan Choker Set",
    originalPrice: 8999,
    discountedPrice: 6749,
    discountPercent: 25,
    rating: 4.5,
    numReviews: 102,
    isWishlisted: false,
    description: "Traditional kundan choker perfect for weddings.",
    variants: "1 design available",
  },
  {
    id: 2,
    imageUrl: "/productimages/1.jpeg",
    hoverImageUrl: "/productimages/h-1.jpeg",
    title: "Gold Temple Pendant Chain",
    originalPrice: 7499,
    discountedPrice: 6374,
    discountPercent: 15,
    rating: 4.2,
    numReviews: 78,
    isWishlisted: true,
    description: "Elegant gold chain with a divine temple pendant.",
    variants: "2 lengths available",
  },
  {
    id: 3,
    imageUrl: "/productimages/3.jpeg",
    hoverImageUrl: "/productimages/h3.jpeg",
    title: "Diamond Stud Earrings",
    originalPrice: 12000,
    discountedPrice: 9600,
    discountPercent: 20,
    rating: 4.8,
    numReviews: 215,
    isWishlisted: false,
    description: "Shiny and sleek diamond studs for daily elegance.",
    variants: "3 styles available",
  },
  {
    id: 4,
    imageUrl: "/productimages/4.jpeg",
    hoverImageUrl: "/productimages/h4.jpeg",
    title: "Polki Bridal Necklace Set",
    originalPrice: 15999,
    discountedPrice: 12799,
    discountPercent: 20,
    rating: 4.7,
    numReviews: 143,
    isWishlisted: true,
    description: "Heavy bridal set designed with authentic Polki stones.",
    variants: "Full bridal combo",
  },
  {
    id: 5,
    imageUrl: "/productimages/5.jpeg",
    hoverImageUrl: "/productimages/h5.jpeg",
    title: "Gold-Plated Jhumka Earrings",
    originalPrice: 6999,
    discountedPrice: 5599,
    discountPercent: 20,
    rating: 4.4,
    numReviews: 89,
    isWishlisted: false,
    description: "Classic jhumkas with intricate filigree work.",
    variants: "2 colors available",
  },
  {
    id: 6,
    imageUrl: "/productimages/6.jpeg",
    hoverImageUrl: "/productimages/h6.jpeg",
    title: "Minimal Solitaire Necklace",
    originalPrice: 11000,
    discountedPrice: 9350,
    discountPercent: 15,
    rating: 4.9,
    numReviews: 204,
    isWishlisted: true,
    description: "Elegant solitaire pendant necklace for everyday wear.",
    variants: "1 design available",
  },
  {
    id: 7,
    imageUrl: "/productimages/7.jpeg",
    hoverImageUrl: "/productimages/h7.jpeg",
    title: "Meenakari Work Necklace Set",
    originalPrice: 8400,
    discountedPrice: 7140,
    discountPercent: 15,
    rating: 4.1,
    numReviews: 61,
    isWishlisted: false,
    description: "Colorful Meenakari artwork necklace with earrings.",
    variants: "4 color options",
  },
  {
    id: 8,
    imageUrl: "/productimages/8.jpeg",
    hoverImageUrl: "/productimages/h8.jpeg",
    title: "Oxidised Silver Kada Bangle",
    originalPrice: 5800,
    discountedPrice: 5220,
    discountPercent: 10,
    rating: 4.3,
    numReviews: 47,
    isWishlisted: true,
    description: "Rustic oxidised kada bangle for ethnic outfits.",
    variants: "2 widths available",
  },
  {
    id: 9,
    imageUrl: "/productimages/9.jpeg",
    hoverImageUrl: "/productimages/h9.jpeg",
    title: "American Diamond Mangalsutra",
    originalPrice: 9500,
    discountedPrice: 7125,
    discountPercent: 25,
    rating: 4.6,
    numReviews: 120,
    isWishlisted: false,
    description: "Stylish American diamond mangalsutra for modern brides.",
    variants: "Adjustable size",
  },
  {
    id: 10,
    imageUrl: "/productimages/10.jpeg",
    hoverImageUrl: "/productimages/h10.jpeg",
    title: "Rose Gold Infinity Bracelet",
    originalPrice: 6000,
    discountedPrice: 5100,
    discountPercent: 15,
    rating: 4.0,
    numReviews: 38,
    isWishlisted: true,
    description: "Trendy infinity symbol bracelet in rose gold finish.",
    variants: "Free size",
  },
  {
    id: 11,
    imageUrl: "/productimages/11.jpeg",
    hoverImageUrl: "/productimages/h11.jpeg",
    title: "Stone-Studded Bridal Maang Tikka",
    originalPrice: 7200,
    discountedPrice: 5760,
    discountPercent: 20,
    rating: 4.5,
    numReviews: 76,
    isWishlisted: false,
    description: "Heavy maang tikka with shining stones and pearls.",
    variants: "Single piece",
  },
  {
    id: 12,
    imageUrl: "/productimages/12.jpeg",
    hoverImageUrl: "/productimages/h12.jpeg",
    title: "Statement Kundan Cocktail Ring",
    originalPrice: 8300,
    discountedPrice: 7055,
    discountPercent: 15,
    rating: 4.2,
    numReviews: 64,
    isWishlisted: true,
    description: "Large kundan ring for royal statement looks.",
    variants: "Adjustable size",
  },
];

// Defensive checks for undefined/null values in ProductCard (e.g., originalPrice, discountedPrice, rating, numReviews)
// Defensive check for imageUrl and hoverImageUrl (fallback to placeholder if missing)

const ProductCard = ({
  id,
  imageUrl,
  hoverImageUrl,
  title,
  originalPrice,
  discountedPrice,
  discountPercent,
  rating,
  numReviews,
  onAddToBag,
  onWishlist,
  isWishlisted = false,
  description,
  variants,
  onQuickView,
}) => {
  const [wishlisted, setWishlisted] = useState(isWishlisted);
  const [hovered, setHovered] = useState(false);

  const handleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted((prev) => !prev);
    if (onWishlist) onWishlist(!wishlisted);
  };

  const handleAddToBag = (e) => {
    e.stopPropagation();
    if (onAddToBag) onAddToBag();
  };

  // Quick View: go to product detail page
  const handleQuickView = (e) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView();
    }
  };

  // Fallbacks for missing data
  const safeOriginalPrice =
    typeof originalPrice === "number" && !isNaN(originalPrice)
      ? originalPrice
      : 0;
  const safeDiscountedPrice =
    typeof discountedPrice === "number" && !isNaN(discountedPrice)
      ? discountedPrice
      : 0;
  const safeRating =
    typeof rating === "number" && !isNaN(rating) ? rating : 0;
  const safeNumReviews =
    typeof numReviews === "number" && !isNaN(numReviews) ? numReviews : 0;

  // Fix: Always use absolute path for images in public folder
  // If imageUrl or hoverImageUrl is missing, fallback to placeholder
  const safeImageUrl =
    hovered && hoverImageUrl
      ? hoverImageUrl
      : imageUrl
      ? imageUrl
      : "https://via.placeholder.com/400x400?text=No+Image";

  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-gray-100 flex flex-col overflow-hidden group cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleQuickView}
    >
      <div className="relative">
        {/* Main image */}
        <img
          src={safeImageUrl}
          alt={title || "Product"}
          className="w-full h-56 object-cover object-center md:h-64 transition-all duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
          }}
        />
        <button
          className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow hover:bg-pink-100 transition z-10"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(e);
          }}
          aria-label="Add to wishlist"
        >
          <Heart
            size={22}
            className={`${
              wishlisted ? "fill-pink-500 stroke-pink-500" : "stroke-gray-400"
            } transition`}
          />
        </button>
        {/* Quick View Button (desktop) */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } z-10`}
        >
          <button
            className="hidden md:block bg-white text-gray-900 px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors rounded whitespace-nowrap shadow"
            onClick={(e) => {
              e.stopPropagation();
              handleQuickView(e);
            }}
            tabIndex={-1}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {title || "Untitled Product"}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through text-sm">
            ${safeOriginalPrice.toFixed(2)}
          </span>
          <span className="text-pink-600 font-bold text-lg">
            ${safeDiscountedPrice.toFixed(2)}
          </span>
          <span className="text-green-600 text-xs font-semibold ml-2">
            {typeof discountPercent === "number" && !isNaN(discountPercent)
              ? `${discountPercent}% OFF`
              : ""}
          </span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={18}
              className={
                i <= Math.round(safeRating)
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            {safeRating.toFixed(1)} ({safeNumReviews})
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-2">{variants || ""}</div>
        <div className="text-xs text-gray-400 mb-2">{description || ""}</div>
        <button
          className="mt-auto flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg px-4 py-2 transition text-sm shadow"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToBag(e);
          }}
        >
          <ShoppingBag size={18} />
          Add to Bag
        </button>
        {/* Mobile Quick View Button */}
        <button
          className="w-full mt-3 bg-gray-900 text-white py-2 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors rounded whitespace-nowrap md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            handleQuickView(e);
          }}
          tabIndex={-1}
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  // Defensive check for setSelectedProduct (should exist from context, but check anyway)
  // Defensive check for navigate (should exist from hook, but check anyway)

  // On click, set selected product and navigate to detail page
  const handleProductClick = (product) => {
    if (typeof setSelectedProduct === "function") {
      setSelectedProduct({
        id: product.id,
        name: product.title,
        price: `$${product.discountedPrice}`,
        variants: product.variants || "",
        image: product.imageUrl,
        description: product.description || "",
        originalPrice: product.originalPrice,
        discountedPrice: product.discountedPrice,
        discountPercent: product.discountPercent,
        rating: product.rating,
        numReviews: product.numReviews,
      });
    }
    if (typeof navigate === "function") {
      navigate(`/products/productdetail/${product.id}`);
    }
  };

  // Defensive check for mockProducts being an array
  if (!Array.isArray(mockProducts) || mockProducts.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No products available.
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {mockProducts.map((product, idx) => (
        <ProductCard
          key={product.id || idx}
          {...product}
          onAddToBag={() =>
            alert(
              `Added "${product.title || "Product"}" to bag!`
            )
          }
          onWishlist={(w) =>
            alert(
              w
                ? `Added "${product.title || "Product"}" to wishlist!`
                : `Removed "${product.title || "Product"}" from wishlist!`
            )
          }
          onQuickView={() => handleProductClick(product)}
        />
      ))}
    </div>
  );
};

export default Products;
