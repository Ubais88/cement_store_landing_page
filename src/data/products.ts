import { Product } from '../types';

export const products: Product[] = [
  // Cement Products
  {
    id: 1,
    name: "UltraTech Cement",
    category: "cement",
    description:
      "High-quality utlratech cement suitable for all construction needs. Meets ASTM standards.",
    price: "400 - ₹420 per bag",
    image: "../assets/ultratechbag.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "PPC Cement",
    category: "cement",
    description:
      "Ultratech Cement ideal for residential construction and general purpose use.",
    price: "₹320 - ₹380 per bag",
    image:
      "https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
  },
  {
    id: 3,
    name: "Mycem Cement",
    category: "cement",
    description:
      "High-quality white cement for decorative finishes and architectural applications.",
    price: "₹550 - ₹600 per bag",
    image: "../assets/mycem.jpeg",
    inStock: true,
  },
  {
    id: 11,
    name: "UltraTech Waterproofing Chemical",
    category: "cement",
    description:
      "Premium waterproofing chemical by UltraTech for terrace, basement, and bathroom applications. Prevents leakage and enhances durability.",
    price: "₹250 - ₹300 per liter",
    image: "../assets/ultratech-waterproofing.jpg",
    inStock: true,
  },

  // Iron and Steel Materials
  {
    id: 4,
    name: "TMT Steel Bars",
    category: "steel",
    description:
      "High tensile strength TMT bars for reinforced concrete structures. Available in 8mm to 32mm diameters.",
    price: "₹60 - ₹70 per kg",
    image: "../assets/iron.jpg",
    inStock: true,
  },

  // Concrete Products
  {
    id: 7,
    name: "Concrete Blocks",
    category: "concrete",
    description:
      "Solid and hollow concrete blocks for walls and foundations. Available in various sizes.",
    price: "₹45 - ₹55 per piece",
    image: "../assets/coverBlock.png",
    inStock: false,
  },

  // Construction Rings and Fixtures
  {
    id: 10,
    name: "Binding Wire",
    category: "fixtures",
    description:
      "Annealed binding wire for reinforcement tying and general construction use.",
    price: "₹80 - ₹90 per kg",
    image: "../assets/witr.jpeg",
    inStock: true,
  },
  {
    id: 12,
    name: "Iron Rings for Column",
    category: "fixtures",
    description:
      "Pre-fabricated iron rings for column reinforcement, ensuring strength and ease of installation.",
    price: "₹100 - ₹120 per set",
    image: "../assets/iron-rings.jpg",
    inStock: true,
  },
];

export const categories = [
  { id: 'cement', name: 'Cement Products' },
  { id: 'steel', name: 'Iron & Steel Materials' },
  { id: 'concrete', name: 'Concrete Products' },
  { id: 'fixtures', name: 'Construction Rings & Fixtures' }
];