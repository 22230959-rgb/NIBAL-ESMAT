
import React from "react";

function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  navigate
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="section page-section">
      <div className="section-heading">
        <span>YOUR SELECTION</span>
        <h2>Shopping Cart</h2>
        <p>Review your selected products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is currently empty.</h3>
          <p>
            Discover something special in our collection.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("Shop")}
          >
            START SHOPPING
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-line">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="summary-line total-line">
              <strong>Total</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button
              className="primary-button checkout-button"
              onClick={() =>
                alert(
                  "Checkout demonstration. Online payment is not connected yet."
                )
              }
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
