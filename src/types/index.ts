export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  primeDelivery?: boolean;
  discount?: number;
  originalPrice?: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}