import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  name: string;
  href: string;
}