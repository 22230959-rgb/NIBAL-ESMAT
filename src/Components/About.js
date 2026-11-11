
import React from "react";

function About({ navigate }) {
  return (
    <section className="section page-section about-section">
      <div className="section-heading">
        <span>OUR STORY</span>
        <h2>About NIBAL • ESMAT</h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Fashion boutique"
          />
        </div>

        <div className="about-text">
          <h2>Elegance Is A Lifestyle.</h2>

          <p>
            NIBAL • ESMAT is a fashion and lifestyle brand
            created for people who appreciate elegance,
            quality and individuality.
          </p>

          <p>
            Our collection brings together clothing,
            accessories and perfumes to help you express
            your unique personality.
          </p>

          <p>
            We believe that true style is not just what
            you wear. It is how you present yourself
            to the world.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("Shop")}
          >
            DISCOVER OUR COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
