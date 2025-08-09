import React, { useMemo, useState } from 'react'
import { PRODUCTS, CATEGORIES } from './data/products'
import type { Product, Filters } from './types'
import { parseQuery } from './lib/nlp'

const formatPrice = (n: number) =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n)

function applyFilters(items: Product[], f: Filters): Product[] {
  let out = items.slice()

  // 1) دسته
  if (f.category && f.category.trim()) {
    const cat = f.category.toLowerCase().trim()
    out = out.filter(p => (p.category || '').toLowerCase().trim() === cat)
  }

  // 2) قیمت
  if (f.priceMin != null) out = out.filter(p => Number(p.price) >= Number(f.priceMin))
  if (f.priceMax != null) out = out.filter(p => Number(p.price) <= Number(f.priceMax))

  // 3) امتیاز
  if (f.minRating != null) out = out.filter(p => Number(p.rating) >= Number(f.minRating))

  // 4) در آخر: متن آزاد
  if (f.q && f.q.trim()) {
    const q = f.q.toLowerCase().trim()
    out = out.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags || []).some(t => (t || '').toLowerCase().includes(q))
    )
  }


  // sort
  switch (f.sort) {
    case 'price-asc': out.sort((a,b) => Number(a.price) - Number(b.price)); break
    case 'price-desc': out.sort((a,b) => Number(b.price) - Number(a.price)); break
    case 'rating-desc': out.sort((a,b) => Number(b.rating) - Number(a.rating)); break
    case 'name-asc': out.sort((a,b) => a.name.localeCompare(b.name)); break
  }

  return out
}

const Suggestion: React.FC<{text:string,onPick:()=>void}> = ({text,onPick}) => (
  <button className="chip" onClick={onPick} title="Apply suggestion">{text}</button>
)

const ProductCard: React.FC<{p: Product}> = ({ p }) => (
  <div className="card">
    <img src={p.image} alt={p.name} />
    <div style={{flex:1}}>
      <h3>{p.name}</h3>
      <div className="muted" style={{marginBottom:8}}>{p.description}</div>
      <div className="controls">
        <span className="pill">{p.category}</span>
        <span className="pill">⭐ {Number(p.rating).toFixed(1)}</span>
        <span className="price">{formatPrice(Number(p.price))}</span>
      </div>
      {p.tags && <div className="chips">{p.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>}
    </div>
  </div>
)

export default function App() {
  const [filters, setFilters] = useState<Filters>({ sort: 'name-asc' })
  const [nlq, setNlq] = useState('')
  const parsed = useMemo(() => parseQuery(nlq), [nlq])
  const combined = useMemo(() => ({ ...filters, ...parsed }), [filters, parsed])
  const result = useMemo(() => applyFilters(PRODUCTS, combined), [combined])

  const clearAll = () => { setFilters({}); setNlq('') }

  return (
    <div className="container">
      <div className="header">
        <div className="title">🛍️ AI E-commerce Catalog</div>
        <div className="search">
          <input
            placeholder='Try: "running shoes under $100 with good reviews"'
            value={nlq}
            onChange={e => setNlq(e.target.value)}
          />
          {/* دکمه فعال */}
          <button className="btn btn-primary" onClick={() => setNlq(nlq.trim())}>
            Smart search
          </button>
        </div>
      </div>

      {/* -- اگر لازم شد، این بلوک کوچک را برای دیباگ موقت باز کن
      <pre className="muted" style={{fontSize:12, overflow:'auto'}}>
        {JSON.stringify({ parsed, combined }, null, 2)}
      </pre>
      -- */}

      <div className="grid">
        <aside className="sidebar">
          <div className="row"><strong>Filters</strong></div>
          <div className="row">
            <input
              placeholder="Keyword (name, description, tags)"
              value={filters.q ?? ''}
              onChange={e => setFilters(f => ({...f, q: e.target.value || undefined}))}
            />
          </div>
          <div className="row">
            <select
              value={filters.category ?? ''}
              onChange={e => setFilters(f => ({...f, category: e.target.value || undefined}))}
            >
              <option value="">All categories</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="row">
            <input
              type="number" min={0} step="1"
              placeholder="Min price"
              value={filters.priceMin ?? ''}
              onChange={e => setFilters(f => ({...f, priceMin: e.target.value ? +e.target.value : undefined}))}
            />
            <input
              type="number" min={0} step="1"
              placeholder="Max price"
              value={filters.priceMax ?? ''}
              onChange={e => setFilters(f => ({...f, priceMax: e.target.value ? +e.target.value : undefined}))}
            />
          </div>
          <div className="row">
            <input
              type="number" min={0} max={5} step="0.1"
              placeholder="Min rating"
              value={filters.minRating ?? ''}
              onChange={e => setFilters(f => ({...f, minRating: e.target.value ? +e.target.value : undefined}))}
            />
          </div>
          <div className="row">
            <select
              value={filters.sort ?? ''}
              onChange={e => setFilters(f => ({...f, sort: (e.target.value || undefined) as any}))}
            >
              <option value="">No sorting</option>
              <option value="name-asc">Name A→Z</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="rating-desc">Rating ↓</option>
            </select>
          </div>
          <div className="row" style={{justifyContent:'space-between'}}>
            <button className="btn" onClick={clearAll}>Clear all</button>
          </div>

          <div className="row" style={{marginTop:16}}><strong>Try these</strong></div>
          <div className="chips">
            <Suggestion text="running shoes under $100 with good reviews" onPick={() => setNlq('running shoes under $100 with good reviews')} />
            <Suggestion text="electronics above $50" onPick={() => setNlq('electronics above $50')} />
          </div>
        </aside>

        <main className="content">
          <div className="controls" style={{marginBottom:16}}>
            <span className="pill">{result.length} results</span>
            {combined.category && <span className="pill">Category: {combined.category}</span>}
            {combined.priceMin != null && <span className="pill">Min: {formatPrice(Number(combined.priceMin))}</span>}
            {combined.priceMax != null && <span className="pill">Max: {formatPrice(Number(combined.priceMax))}</span>}
            {combined.minRating != null && <span className="pill">≥ {Number(combined.minRating)}★</span>}
            {combined.sort && <span className="pill">Sort: {combined.sort}</span>}
          </div>

          <div className="grid" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
            {result.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </main>
      </div>
    </div>
  )
}
