import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to ShopKart India 🛍️</h1>

      <p>
        Discover amazing products at affordable prices.
        <br />
        Shop Electronics, Fashion, Jewellery and more.
      </p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;