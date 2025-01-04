import React from 'react';
import { X } from 'lucide-react';

const categories = [
  "Electronics",
  "Computers",
  "Smart Home",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Fashion",
  "Health & Household",
  "Home & Kitchen",
  "Sports & Outdoors"
];

export default function CategoryMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-80 bg-white overflow-y-auto">
        <div className="bg-[#232f3e] text-white p-4 flex items-center justify-between">
          <span className="font-bold">Browse Amazon</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="p-2">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="block px-4 py-2 text-[#0F1111] hover:bg-gray-100 rounded"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}