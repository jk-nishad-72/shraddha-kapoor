import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Star,
} from "lucide-react";

const googlePlayBadge =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

const paymentIcons = [
  {
    name: "GPay",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg",
    className: "h-7 w-auto",
  },
  {
    name: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    className: "h-7 w-auto",
  },
  {
    name: "PayPal",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    className: "h-7 w-auto",
  },
  {
    name: "Visa",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    className: "h-7 w-auto",
  },
];

const FooterButton = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Social + App Download */}
        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          {/* Social Icons */}
          <div className="flex gap-4 mb-2">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition transform hover:scale-105"
              target="_blank" rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition transform hover:scale-105"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition transform hover:scale-105"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition transform hover:scale-105"
              target="_blank" rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5 text-gray-600" />
            </a>
          </div>
          {/* App Download Card */}
          <div className="bg-pink-50 rounded-xl px-6 py-5 shadow-sm w-full max-w-xs">
            <div className="font-bold text-lg mb-1 text-gray-900">
              Download the PALMONAS App
            </div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <span className="font-medium text-gray-700">( 4L+ Downloads |</span>
              <span className="flex items-center font-semibold text-orange-500">
                4.4
                <Star className="h-4 w-4 fill-orange-400 text-orange-400 ml-0.5" />
              </span>
              <span className="font-medium text-gray-700">)</span>
            </div>
            <div className="flex gap-3 mb-2">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Get Exclusive Offers On App
            </div>
          </div>
        </div>
        {/* Spacer for mobile */}
        <div className="h-6 md:hidden" />
        {/* Center/Bottom: Payment & Legal */}
        <div className="flex flex-col items-center justify-end w-full md:w-1/2">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            {paymentIcons.map((icon) => (
              <img
                key={icon.name}
                src={icon.src}
                alt={icon.name}
                className={icon.className + " bg-white rounded shadow-sm p-1"}
                style={{ maxWidth: 60, maxHeight: 32 }}
              />
            ))}
          </div>
          <div className="text-center">
            <div className="font-medium text-gray-700 text-sm">
              All Rights Reserved © Palmonas
            </div>
            <a
              href="#"
              className="text-xs text-gray-400 hover:underline mt-1 inline-block"
            >
              Annual Returns 2023-24
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterButton;
