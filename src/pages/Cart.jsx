import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({cart, removeFromCart,setCart}){
    const total=cart.reduce((sum,item)=>sum+item.price*80*item.quantity,0);

    const increaseQty=(id)=>{
        setCart(prev =>prev.map(item =>
            item.id === id ? {...item,quantity:item.quantity+1}
            : item
        ))
    }
    const decreaseQty=(id)=>{
        setCart(prev =>prev.map(
            item=> item.id ===id ?{...item,quantity:item.quantity-1}:
            item
        )
        .filter(item =>item.quantity>0)
    );
    }
    return(<>
    <h3 className="cart">Your Cart</h3>
    {cart.length ===0 ?(<p className="empty-cart">Oops! It feels very light..</p>):(
        <>
        <ul className="ul-of-cart">{cart.map((item,index)=>(
            <li key={index} className="cart-product-list">
                <img src={item.image} alt={item.title} className="cart-product-image"/>
                <span className="cart-product-title">{item.title}</span>
                <span className="cart-product-price">{(item.price*80).toFixed(0)}</span>
                <span className="cart-product-quantity">{item.quantity}</span>
                <button className="inc-qty-btn" onClick={()=>increaseQty(item.id)} >➕</button>
                <button className="remove-product-btn" onClick={()=>removeFromCart(item.id)}>🗑️</button>
                <button className="dec-qty-btn" onClick={()=>decreaseQty(item.id)}>➖</button>
            </li>
        ))}
        </ul>
        <h4 className="total-cart-price">Total: {total.toFixed(0)}</h4>
        <Link to="/checkout" className="checkout-btn"><button>Check Out</button></Link>
        </>
    )}
    </>
    );
}
export default Cart;