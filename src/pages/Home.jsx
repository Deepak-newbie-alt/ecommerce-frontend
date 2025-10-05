import { useState,useEffect } from "react";
import {Link } from "react-router-dom";
import "./Home.css";
import ProductCard from "../components/ProductCard";

function Home(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res =>res.json())
        .then(data=>setProducts(data.slice(0,4)))
        .catch(err=> console.error("Error fetching Data:",err))
},[])
    return(<>
        <div className="home-container">
        <section className="hero-container">
        <h1 className="hero-title">Welcome to MyStore 🛍️</h1>
        <p className="hero-subtitle">Discover exclusive deals and the best products online.</p>
        <Link to="/products"><button className="shop-now-btn">Shop Now</button></Link>
        </section>

        <section className="trending-section">
            <h2 className="trending-heading">Trending Products</h2>
            <div className="product-grid">
                {products.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
        </div>
    </>
    );
}
export default Home;