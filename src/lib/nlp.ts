//src/lib/nlp.ts
import type { Filters } from '../types'

export function parseQuery(q: string): Filters {
    const text = q.toLowerCase()
    const f: Filters = {}

    let m = text.match(/(under|below|less than)\s*\$?\s*(\d+(?:\.\d+)?)/)
    if (m) f.priceMax = parseFloat(m[2])

    m = text.match(/(over|above|greater than)\s*\$?\s*(\d+(?:\.\d+)?)/)
    if (m) f.priceMin = parseFloat(m[2])

    m = text.match(/between\s*\$?\s*(\d+(?:\.\d+)?)\s*(?:and|to)\s*\$?\s*(\d+(?:\.\d+)?)/)
    if (m) { f.priceMin = parseFloat(m[1]); f.priceMax = parseFloat(m[2]) }

    m = text.match(/(\d(?:\.\d)?)\+?\s*stars?/)
    if (m) f.minRating = parseFloat(m[1])

    if (text.includes('good reviews') || text.includes('highly rated') || text.includes('top rated')) {
        f.minRating = Math.max(f.minRating ?? 0, 4.2)
    }

    if (text.includes('cheapest') || text.includes('low to high')) f.sort = 'price-asc'
    if (text.includes('expensive') || text.includes('high to low')) f.sort = 'price-desc'
    if (text.includes('best rated') || text.includes('top rated')) f.sort = 'rating-desc'

    if (text.includes('shoe')) (f as any).category = 'Shoes'
    if (text.includes('headphone') || text.includes('camera') || text.includes('electronics')) (f as any).category = 'Electronics'
    if (text.includes('jacket') || text.includes('tee') || text.includes('shirt') || text.includes('apparel')) (f as any).category = 'Apparel'
    if (text.includes('outdoor') || text.includes('hike') || text.includes('yoga')) (f as any).category = 'Outdoors'
    if (text.includes('home') || text.includes('kitchen') || text.includes('coffee')) (f as any).category = 'Home'
    if (text.includes('cap') || text.includes('hat') || text.includes('accessor')) (f as any).category = 'Accessories'

    const CATEGORY_WORDS = [
        'shoe', 'shoes', 'running', 
        'electronics', 'headphone', 'headphones', 'camera', 'cameras',
        'apparel', 'jacket', 'tee', 'shirt', 't-shirt',
        'outdoor', 'outdoors', 'hike', 'hiking', 'yoga',
        'home', 'kitchen', 'coffee',
        'accessory', 'accessories', 'cap', 'hat'
    ]

    const cleaned = text
        .replace(/(under|below|less than|over|above|greater than|between|and|to|dollars?|usd|euro|stars?|with|good reviews|top rated|highly rated|cheapest|expensive)/g, ' ')
        .replace(new RegExp(`\\b(${CATEGORY_WORDS.join('|')})\\b`, 'g'), ' ')
        .replace(/\$?\d+(?:\.\d+)?/g, ' ') 
        .replace(/\s+/g, ' ')
        .trim()

    if (cleaned) f.q = cleaned

    return f
}
