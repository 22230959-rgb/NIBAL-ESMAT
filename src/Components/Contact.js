
import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Thank you! Your message has been received.");

    e.target.reset();
  };

  return (
    <section className="section page-section">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Contact Us</h2>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <h2>Let's Talk.</h2>

          <p>Have a question about our products?</p>
          <p>We are here to help you.</p>

          <div className="contact-item">
            <strong>BRAND</strong>
            <span>NIBAL • ESMAT</span>
          </div>

          <div className="contact-item">
            <strong>EMAIL</strong>
            <span>info@nibalesmat.com</span>
          </div>

          <div className="contact-item">
            <strong>LOCATION</strong>
            <span>Lebanon</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button className="primary-button" type="submit">
            SEND MESSAGE
          </button>

          {message && (
            <p className="success-message">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
