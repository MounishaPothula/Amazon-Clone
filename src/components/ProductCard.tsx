import React from 'react';
import { Star, Truck } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isDark: boolean;
}

export default function ProductCard({ product, onAddToCart, isDark }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? "fill-[#FFA41C] text-[#FFA41C]" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-[#007185] hover:text-[#C7511F] cursor-pointer">
          {product.reviews.toLocaleString()} ratings
        </span>
      </div>
    );
  };

  return (
    <div className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded shadow-sm hover:shadow-lg transition-shadow`}>
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
      </div>

      <h3 className={`text-lg mb-1 ${isDark ? 'text-white hover:text-[#C7511F]' : 'text-[#0F1111] hover:text-[#C7511F]'} cursor-pointer`}>
        {product.title}
      </h3>

      {renderStars(product.rating)}

      <div className="mt-2">
        {product.discount && (
          <span className="bg-red-600 text-white px-2 py-1 text-xs rounded-sm mr-2">
            Save {product.discount}%
          </span>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-medium">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {product.primeDelivery && (
        <div className="flex items-center gap-1 text-sm my-2">
          <Truck size={16} className="text-blue-500" />
          <span className="text-[#007185]">Prime FREE Delivery</span>
        </div>
      )}

      <div className="mt-3">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] py-1 px-4 rounded-full border border-[#FCD200] shadow-sm"
        >
          Add to Cart
        </button>
        {product.stock <= 10 && (
          <p className="text-sm text-red-600 mt-2">
            Only {product.stock} left in stock - order soon
          </p>
        )}
      </div>
    </div>
  );
}