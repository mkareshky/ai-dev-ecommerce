import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  // SHOES — include 'running', price < 100, rating >= 4.2
  {
    id: 'p1',
    name: 'StrideRun 2.0 Running Shoes',
    price: 89.99,
    category: 'Shoes',
    description: 'Lightweight running shoes under $100 with responsive cushioning and good reviews.',
    rating: 4.4,
    image: 'https://picsum.photos/seed/stride-run/800/600',
    tags: ['running', 'good reviews', 'lightweight']
  },
  {
    id: 'p2',
    name: 'AeroFit Trail Running Shoes',
    price: 94.0,
    category: 'Shoes',
    description: 'Trail-ready running shoes under $100, highly rated for grip and comfort.',
    rating: 4.5,
    image: 'https://picsum.photos/seed/aerofit-trail/800/600',
    tags: ['running', 'good reviews', 'trail']
  },
  {
    id: 'p3a',
    name: 'UrbanRun Comfort Shoes',
    price: 79.99,
    category: 'Shoes',
    description: 'Affordable running shoes under $100 with good reviews and great cushioning.',
    rating: 4.3,
    image: 'https://picsum.photos/seed/urbanrun-shoes/800/600',
    tags: ['running', 'good reviews', 'cushion']
  },

  // ELECTRONICS
  {
    id: 'p3',
    name: 'Nimbus Noise-Canceling Headphones',
    price: 179.99,
    category: 'Electronics',
    description: 'Wireless headphones with ANC and 30h battery life. Electronics above $50.',
    rating: 4.7,
    image: 'https://picsum.photos/seed/nimbus-headphones/800/600',
    tags: ['electronics', 'bluetooth', 'ANC']
  },
  {
    id: 'p4',
    name: 'PixelPro Action Camera 4K',
    price: 249.0,
    category: 'Electronics',
    description: 'Rugged 4K action camera, waterproof up to 10m. Electronics above $50.',
    rating: 4.3,
    image: 'https://picsum.photos/seed/pixelpro-camera/800/600',
    tags: ['electronics', 'camera', 'outdoors']
  },
  {
    id: 'p15',
    name: 'ProSound Wireless Earbuds',
    price: 69.0,
    category: 'Electronics',
    description: 'Compact earbuds with clear sound and long battery. Electronics above $50.',
    rating: 4.2,
    image: 'https://picsum.photos/seed/prosound-earbuds/800/600',
    tags: ['electronics', 'bluetooth', 'audio']
  },
  // ↑ دو مورد زیر 200 و یک مورد بالای 200 داریم. برای دمو «above $200» چند گزینه‌ی دیگر اضافه می‌کنیم:
  {
    id: 'p16',
    name: 'UltraView 8K Smart TV',
    price: 1299.99,
    category: 'Electronics',
    description: 'Massive 8K smart television with HDR10+ support.',
    rating: 4.8,
    image: 'https://picsum.photos/seed/ultraview-tv/800/600',
    tags: ['tv', 'electronics', 'smart']
  },
  {
    id: 'p17',
    name: 'Photon DSLR Camera Pro',
    price: 899.0,
    category: 'Electronics',
    description: 'Professional DSLR with fast autofocus and 4K video.',
    rating: 4.6,
    image: 'https://picsum.photos/seed/photon-dslr/800/600',
    tags: ['electronics', 'camera', 'dslr']
  },
  {
    id: 'p18',
    name: 'QuantumBook Ultrabook 14"',
    price: 1199.0,
    category: 'Electronics',
    description: 'Lightweight ultrabook with long battery life and fast NVMe SSD.',
    rating: 4.5,
    image: 'https://picsum.photos/seed/quantumbook/800/600',
    tags: ['electronics', 'laptop', 'ultrabook']
  },

  // APPAREL
  {
    id: 'p5',
    name: 'BreezeLite Packable Jacket',
    price: 59.0,
    category: 'Apparel',
    description: 'Wind-resistant, water-repellent shell that packs into its own pocket.',
    rating: 4.1,
    image: 'https://picsum.photos/seed/breezelite-jacket/800/600',
    tags: ['jacket', 'windbreaker']
  },
  {
    id: 'p11',
    name: 'CloudSoft Cotton Tee',
    price: 24.0,
    category: 'Apparel',
    description: 'Super-soft cotton t-shirt with durable stitching and a tailored fit.',
    rating: 4.3,
    image: 'https://picsum.photos/seed/cloudsoft-tee/800/600',
    tags: ['t-shirt', 'casual']
  },

  // OUTDOORS
  {
    id: 'p6',
    name: 'Summit 30L Daypack',
    price: 74.5,
    category: 'Outdoors',
    description: 'Durable daypack with ventilated back panel and hydration sleeve.',
    rating: 4.5,
    image: 'https://picsum.photos/seed/summit-daypack/800/600',
    tags: ['backpack', 'hiking']
  },
  {
    id: 'p8',
    name: 'FlexPro Yoga Mat',
    price: 29.0,
    category: 'Outdoors',
    description: 'Non-slip yoga mat with optimal cushioning for balance and comfort.',
    rating: 4.0,
    image: 'https://picsum.photos/seed/flexpro-yoga/800/600',
    tags: ['fitness', 'yoga']
  },
  {
    id: 'p12',
    name: 'TrailBlaze Trekking Poles',
    price: 64.0,
    category: 'Outdoors',
    description: 'Lightweight aluminum poles with quick-lock and cork handles.',
    rating: 4.5,
    image: 'https://picsum.photos/seed/trailblaze-poles/800/600',
    tags: ['hiking', 'trekking']
  },

  // HOME
  {
    id: 'p7',
    name: 'HomeBrew Pour-Over Kit',
    price: 39.99,
    category: 'Home',
    description: 'All-in-one glass pour-over kit for clean, bright coffee.',
    rating: 4.2,
    image: 'https://picsum.photos/seed/homebrew-coffee/800/600',
    tags: ['coffee', 'kitchen']
  },

  // ACCESSORIES
  {
    id: 'p10',
    name: 'EveryDay Canvas Cap',
    price: 19.0,
    category: 'Accessories',
    description: 'Classic 6-panel cap with adjustable strap and low-profile fit.',
    rating: 3.9,
    image: 'https://picsum.photos/seed/everyday-cap/800/600',
    tags: ['hat', 'casual']
  },

  // POWER BANK (left as below $50 to be excluded in "electronics above $50")
  {
    id: 'p9',
    name: 'ArcCharge 20k Power Bank',
    price: 49.0,
    category: 'Electronics',
    description: 'Slim USB-C PD power bank with fast charging and LED indicator.',
    rating: 4.6,
    image: 'https://picsum.photos/seed/arccharge-powerbank/800/600',
    tags: ['battery', 'usb-c']
  }
]

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)))
