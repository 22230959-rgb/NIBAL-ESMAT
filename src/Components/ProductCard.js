
import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="product-category">
          {product.category}
        </span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className="add-button"
            onClick={() => addToCart(product)}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
