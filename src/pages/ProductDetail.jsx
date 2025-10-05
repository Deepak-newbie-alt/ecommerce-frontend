import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
function ProductDetail({addToCart}){
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data =>setProduct(data))
        .catch(err =>console.error("Error fetching product detail:",err));
    },[id])
    if(!product) return <h3>Loading...</h3>;

    return(
    <div className="product-container">
        <img src={product.image} alt={product.title} className="product-image"></img>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price"><strong>₹{(product.price*80).toFixed(0)}</strong></p>
        <p className="product-description">{product.description}</p>
        <p className="product-category"><em>Category: {product.category}</em></p><br/>
        <button className="add-to-cart-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
    );
}
export default ProductDetail;