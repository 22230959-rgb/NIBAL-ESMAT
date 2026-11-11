
import React from "react";
import products from "./Products";
import ProductCard from "./ProductCard";

function Home({ navigate, addToCart, setCategory }) {
  const openCategory = (category) => {
    setCategory(category);
    navigate("Shop");
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img
            src="/logo.png"
            alt="NIBAL ESMAT"
            className="home-Logo"
        />

          <span className="hero-label">
            WELCOME TO NIBAL • ESMAT
          </span>

          <h1>
            STYLE IS
            <br />
            YOUR <span>IDENTITY.</span>
          </h1>

          <p>
            Discover a world of elegance, fashion and
            unforgettable fragrances.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("Shop")}
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Discover Your Style</h2>
          <p>
            Everything you need to express your personality.
          </p>
        </div>

        <div className="category-grid">
          <div
            className="category-card clothing"
            onClick={() => openCategory("Clothing")}
          >
            <div>
              <h3>Clothing</h3>
              <span>EXPLORE MORE →</span>
            </div>
          </div>

          <div
            className="category-card accessories"
            onClick={() => openCategory("Accessories")}
          >
            <div>
              <h3>Accessories</h3>
              <span>EXPLORE MORE →</span>
            </div>
          </div>

          <div
            className="category-card perfumes"
            onClick={() => openCategory("Perfumes")}
          >
            <div>
              <h3>Perfumes</h3>
              <span>EXPLORE MORE →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <span>HANDPICKED FOR YOU</span>
          <h2>Featured Products</h2>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="center-button">
          <button
            className="outline-button"
            onClick={() => navigate("Shop")}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
