import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  // Total quantity of all items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🛍️ ShopKart India</h2>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search footwear..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;