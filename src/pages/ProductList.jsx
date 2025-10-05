import { useEffect, useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import './ProductList.css';

function ProductList(){
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data))
        .catch(err => console.error("Error while fetching product:",err));
    },[]);
    return(
        <div className="container">
    <div className="list-container">
        {products.map(product=>(
            <div key={product.id} className="products-container">
                <img src={product.image} alt={product.title} className="products-image"></img>
                <h2 className="products-title">{product.title.slice(0,40)}...</h2>
                <p className="products-price">₹{(product.price*80).toFixed(0)}</p>
                <Link to={`/products/${product.id}`} className="products-details">Veiw Details</Link>
            </div>
        ))}
  </div>
  </div>
    );
}
export default ProductList;