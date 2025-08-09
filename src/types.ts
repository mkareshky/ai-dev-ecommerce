// src/types.ts
export type Product = {
  id: string
  name: string
  price: number
  category: 'Shoes' | 'Electronics' | 'Apparel' | 'Outdoors' | 'Home' | 'Accessories'
  description: string
  rating: number // 1-5
  image: string
  tags?: string[]
}

export type Filters = {
  q?: string
  category?: string
  priceMin?: number
  priceMax?: number
  minRating?: number
  sort?: 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc'
}
