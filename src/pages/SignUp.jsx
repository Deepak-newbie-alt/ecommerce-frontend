import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
function SignUp(){
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navigate=useNavigate();

    const handleSignUp=(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (pass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    const existingUsers=JSON.parse(localStorage.getItem("users"))|| [] ;
    const userExists=existingUsers.find(user=>user.email===email);
    if (userExists){
        alert("Email already registerd! please Login");
        return;
    }
    const newUser={email,password:pass};
    const updatedUsers=[...existingUsers,newUser];
    localStorage.setItem("users",JSON.stringify(updatedUsers));
    alert("Sign-up sucessful! Please Login");
    navigate("/login");
    }

    return(
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSignUp}>
                <input className="email-signup-input" type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input className="pass-signup-input" type="password" placeholder="Enter a strong password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
                <button className="signup-btn" type="submit">Sign-Up/Register</button>
            </form>
        </div>
    )
}
export default SignUp;