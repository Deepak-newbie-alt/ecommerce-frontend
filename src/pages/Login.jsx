import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({setUser}){
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navigate= useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Enter a valid email");
            return;
        }
        if(pass.length<6){
            alert("Password must be at least 6 characters");
            return;
        }
        const existingUsers=JSON.parse(localStorage.getItem("users"))||[];
        const validUser=existingUsers.find(user => user.email === email && user.pass === pass);
        if(!validUser){
            alert("Invalid credentials")
            return;
        }
        const user={email};
        localStorage.setItem("user",JSON.stringify(user));
        setUser(user);
        navigate("/");
    };
    return(
        <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
            <input className="email-login-input" type="email" placeholder="Please enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input className="pass-login-input" type="password" placeholder="Please enter your password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
            <button className="login-btn" type="submit">Login</button>
        </form>
        </div>
    )
}
export default Login;