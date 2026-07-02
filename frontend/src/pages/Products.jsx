import { useEffect, useState } from "react";
import API from "../services/api";
import { Link, useLocation } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  useEffect(() => {
    API.get("/products")
      .then((response) => {
        let data = response.data;

        if (search) {
          data = data.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h3>{product.title}</h3>

              <p>₹{Math.round(product.price * 83)}</p>

              <Link to={`/product/${product.id}`}>
                <button className="view-btn">View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>No products found.</h2>
        )}
      </div>
    </div>
  );
}

export default Products;