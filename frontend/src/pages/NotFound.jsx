import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="checkout-btn">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;