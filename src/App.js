
import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const navigate = (newPage) => {
    setPage(newPage);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    setMessage(`${product.name} added to your cart!`);

    setTimeout(() => setMessage(""), 2500);
  };

  const updateQuantity = (id, amount) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      <Navbar
        page={page}
        navigate={navigate}
        totalItems={totalItems}
      />

      {message && <div className="toast">{message}</div>}

      <main>
        {page === "Home" && (
          <Home
            navigate={navigate}
            addToCart={addToCart}
            setCategory={setCategory}
          />
        )}

        {page === "Shop" && (
          <Shop
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
            addToCart={addToCart}
          />
        )}

        {page === "About" && (
          <About navigate={navigate} />
        )}

        {page === "Contact" && <Contact />}

        {page === "Cart" && (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            navigate={navigate}
          />
        )}
      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default App;
