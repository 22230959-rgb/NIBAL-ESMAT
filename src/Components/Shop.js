
import React from "react";
import products from "./Products";
import ProductCard from "./ProductCard";

function Shop({
  category,
  setCategory,
  search,
  setSearch,
  addToCart
}) {
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section page-section">
      <div className="section-heading">
        <span>THE COLLECTION</span>
        <h2>Our Products</h2>
        <p>Find the perfect addition to your style.</p>
      </div>

      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Perfumes">Perfumes</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="empty-message">
            No products found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}

export default Shop;
