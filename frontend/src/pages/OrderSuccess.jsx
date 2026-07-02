import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>ShopKart India</strong>.
        </p>

        <p>Your order has been received and will be processed shortly.</p>

        <Link to="/products">
          <button className="checkout-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;