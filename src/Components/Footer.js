
import React from "react";

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-crown">♛</span>
        <h2>NIBAL • ESMAT</h2>
        <p>CLOTHING · ACCESSORIES · PERFUMES</p>
      </div>

      <p className="footer-tagline">STYLE LIVES HERE.</p>

      <div className="footer-links">
        {["Home", "Shop", "About", "Contact"].map((item) => (
          <button key={item} onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NIBAL • ESMAT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
