### **How to Run the App** ✅

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-ecommerce-catalog.git
   cd ai-ecommerce-catalog
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open your browser and visit:

   ```
   http://localhost:5173
   ```

---

### **Chosen AI Feature** ✅

We implemented **Smart Product Search (NLP)**.
Users can type natural language queries like:

```
Show me running shoes under $100 with good reviews
```

The search engine parses intent (category, price range, rating) and filters the product catalog accordingly.

---

### **Tools / Libraries Used** ✅

* **React 18 + TypeScript** — UI framework & type safety
* **Vite** — fast build tool & dev server
* **Tailwind CSS** — styling
* **OpenAI API (optional)** — natural language processing (can be swapped for rule-based parser)
* **Custom NLP Parser** — fallback for offline mode
* **React Icons** — icons in UI

---

### **Notable Assumptions** ✅

* Product data is static (stored in JSON) for demonstration purposes.
* NLP parsing is simplified; production systems may require more robust models.
* Images are linked from public image sources (Unsplash), which may change or expire.
* No backend is required for this demo — it’s purely frontend.

---

## **Blockchain Integration** ✅

This AI-powered search could integrate with blockchain by using **on-chain user preference storage** so product recommendations persist across different platforms without centralized servers.
Additionally, we could implement **token-gated pricing**, where only wallet holders of specific tokens see exclusive discounts or products.
Loyalty points earned from purchases could be managed as **smart contracts**, ensuring transparency and portability between e-commerce ecosystems.

---
