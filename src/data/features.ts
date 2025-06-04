import { Feature } from '../types';
import { BadgePercent, Truck, Award, Headset, CreditCard } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Competitive Pricing',
    description: 'We offer the best market rates and bulk order discounts, helping you complete projects within budget.',
    icon: BadgePercent
  },
  {
    id: 2,
    title: 'Quality Assurance',
    description: 'All our products meet industry standards and come with quality guarantees for peace of mind.',
    icon: Award
  },
  {
    id: 3,
    title: 'Delivery Services',
    description: 'Fast and reliable delivery to your construction site with our dedicated fleet of vehicles.',
    icon: Truck
  },
  {
    id: 4,
    title: 'Technical Consultation',
    description: 'Our experts provide free guidance on material selection and usage for your specific requirements.',
    icon: Headset
  },
  {
    id: 5,
    title: 'Flexible Payment Options',
    description: 'Multiple payment methods accepted, including credit cards, bank transfers, and financing options for large orders.',
    icon: CreditCard
  }
];