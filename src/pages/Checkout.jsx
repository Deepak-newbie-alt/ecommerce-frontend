import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart, setCart }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price * 80 * item.quantity, 0);

    const handleOrder = (e) => {
        e.preventDefault();
        if (!name || !address) {
            alert("Please fill in all fields");
            return;
        }
        alert("Your order is successfully placed!");
        setCart([]);
        setName("");
        setAddress("");
        navigate("/products");
    };

    return (
        <div className="checkout-container">
            <h2 className="summary-heading">Order Summary</h2>
            {cart.map((item, index) => (
                <div key={index} className="summary-container">
                    <p className="order-summary">{item.title} Quantity: {item.quantity}</p>
                </div>
            ))}
            <h4 className="grand-total">Grand Total: {total.toFixed(0)}</h4>

            <form className="checkout-form" onSubmit={handleOrder}>
                <input
                    className="reciever-name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    className="reciever-address"
                    placeholder="Please enter the Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button className="place-order-btn" type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
