import React from 'react';
import { X } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ items, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        
        <div className="p-4 h-[calc(100%-180px)] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <select
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                      className="border rounded px-2 py-1"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#007185] hover:text-[#C7511F] text-sm"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-2 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="text-lg mb-4">
            Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items):
            <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] py-2 px-4 rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}