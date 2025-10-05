import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp  from "./pages/SignUp";
import { useState,useEffect } from "react";
import Checkout from "./pages/Checkout";

function App() {
const [user,setUser]=useState(()=>{
  const savedUser= localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser):null;
})

  const [cart,setCart]=useState(()=>{
    const savedCart= localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  const addToCart = (product) =>{
    setCart((prevCart) => {
      const exists= prevCart.find(item =>item.id === product.id);

      if(exists){
        return prevCart.map(item =>item.id === product.id ?
          {...item,quantity: item.quantity +1}:
          item
        );
      }else{
        return[...prevCart,{...product,quantity:1}];
      }
    });
  }
  const removeFromCart = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
};
  return(<>
  <Router>
      <NavBar cartCount={cart.length} user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart}/>} />
        <Route path="/cart" element={user?(<Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart}/>):(<Navigate to="/login"/>)} />
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/checkout" element={user ? <Checkout cart={cart} setCart={setCart}/> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  </>
  );
}

export default App
