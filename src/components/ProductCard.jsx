import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.title}
      />
      <h2 className="product-card-title">{product.title.slice(0, 40)}...</h2>
      <p className="product-card-price">₹{(product.price * 80).toFixed(0)}</p>
      <Link to={`/products/${product.id}`} className="product-detail-btn">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
