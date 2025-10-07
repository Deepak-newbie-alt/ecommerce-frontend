import { useEffect, useState } from "react";
import axios from "axios";
import './ProductList.css';
import ProductCard from "../components/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error while fetching product:", err));
  }, []);

  return (
    <div className="container">
      <div className="list-container">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
