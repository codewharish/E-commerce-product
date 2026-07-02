import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "40px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#1e293b",
        }}
      >
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          Your cart is empty.
        </h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>

                <p>
                  <strong>Price:</strong> ₹
                  {Math.round(item.price * 83)}
                </p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <p>
                  <strong>Total:</strong> ₹
                  {Math.round(item.price * item.quantity * 83)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          ))}

          <hr style={{ margin: "30px 0" }} />

          <h2 className="grand-total">
            Grand Total: ₹{Math.round(grandTotal * 83)}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;