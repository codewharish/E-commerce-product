import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      alert("Please fill all fields.");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout-container">

      <div className="checkout-card">

        <h1>Checkout</h1>

        <div className="form-grid">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
          />

          <input
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />

          <select name="payment" onChange={handleChange}>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>

        </div>


        <div className="checkout-summary">

          <h2>
            Total: ₹{Math.round(grandTotal * 83)}
          </h2>

          <button 
            className="checkout-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;