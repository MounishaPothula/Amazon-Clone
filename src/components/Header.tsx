import React, { useState } from 'react';
import { ShoppingCart, Search, MapPin, Menu } from 'lucide-react';
import CategoryMenu from './CategoryMenu';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ cartCount, cartTotal, isDark, onThemeToggle }: HeaderProps) {
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div>
      <header className="bg-[#131921] text-white">
        <div className="max-w-7xl mx-auto py-3 px-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
              alt="Amazon" 
              className="h-8 object-contain"
            />
            
            <div className="flex items-center text-sm hover:border-white border border-transparent p-2 cursor-pointer">
              <MapPin size={20} />
              <div className="ml-1">
                <div className="text-gray-300 text-xs">Deliver to</div>
                <div className="font-bold">United States</div>
              </div>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSearch} className="flex">
                <button 
                  type="button"
                  className="bg-gray-100 px-3 rounded-l-md text-black hover:bg-gray-200 flex items-center gap-1"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <Menu size={20} />
                  All
                </button>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Amazon"
                  className="w-full px-4 py-2 text-black focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-[#febd69] px-6 rounded-r-md hover:bg-[#f3a847]"
                >
                  <Search className="text-black" />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4">
              <div className="hover:border-white border border-transparent p-2 cursor-pointer">
                <div className="text-xs">Hello, sign in</div>
                <div className="font-bold text-sm">Account & Lists</div>
              </div>

              <div className="hover:border-white border border-transparent p-2 cursor-pointer">
                <div className="text-xs">Returns</div>
                <div className="font-bold text-sm">& Orders</div>
              </div>

              <div className="flex items-center hover:border-white border border-transparent p-2 cursor-pointer">
                <div className="relative">
                  <ShoppingCart size={30} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#febd69] text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-bold ml-2">${cartTotal.toFixed(2)}</span>
              </div>

              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>
      </header>
      
      <nav className="bg-[#232f3e] text-white px-4">
        <div className="max-w-7xl mx-auto py-1">
          <div className="flex items-center gap-4 overflow-x-auto">
            <button 
              className="hover:border-white border border-transparent p-2 flex items-center gap-1 whitespace-nowrap"
              onClick={() => setShowCategories(!showCategories)}
            >
              <Menu /> All
            </button>
            <a href="#" className="hover:border-white border border-transparent p-2 whitespace-nowrap">Today's Deals</a>
            <a href="#" className="hover:border-white border border-transparent p-2 whitespace-nowrap">Customer Service</a>
            <a href="#" className="hover:border-white border border-transparent p-2 whitespace-nowrap">Registry</a>
            <a href="#" className="hover:border-white border border-transparent p-2 whitespace-nowrap">Gift Cards</a>
            <a href="#" className="hover:border-white border border-transparent p-2 whitespace-nowrap">Sell</a>
          </div>
        </div>
      </nav>

      {showCategories && <CategoryMenu onClose={() => setShowCategories(false)} />}
    </div>
  );
}