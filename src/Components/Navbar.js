
import React from "react";

function Navbar({ page, navigate, totalItems }) {
  return (
    <>
       <div className="brand-logo">
          <img
             src="/ESMAT NIBAL logo.png"
             alt="NIBAL ESMAT"
             className="navbar-logo"
          />
         </div>
      <div className="announcement">
        WELCOME TO NIBAL • ESMAT — STYLE LIVES HERE
      </div>

      <header className="navbar">
        <button
          className="brand-logo"
          onClick={() => navigate("Home")}
        >
          <img
            src="/ESMAT NIBAL Logo.png"
            alt="NIBAL ESMAT Logo"
            className="navbar-logo"
          />
        </button>

        <nav className="nav-links">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}

          <button
            className="cart-link"
            onClick={() => navigate("Cart")}
          >
            Cart <span>{totalItems}</span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
