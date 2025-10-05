import { Link,useNavigate} from "react-router-dom";
import "./NavBar.css";

function NavBar({cartCount,user,setUser}){
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    }
    return(
    <nav>
        <Link to="/" className="home-link" style={{marginLeft:"25px"}}>Home</Link>
        <Link to="/products" className="products-link" style={{marginLeft:"25px"}}>Products</Link>
        <Link to="/cart" className="cart-link" style={{marginLeft:"25px"}}>Cart ({cartCount})</Link>

        <div>
        {user? (
            <>
            <span className="welcome-message">Welcome! {user.email}</span>
            <button className="logout-btn" onClick={handleLogOut}>Logout</button>
            </>
            ):(<>
            <Link className="login-link" to="/login">Log In</Link>
            <Link className="signup-link" to="/signup">Sign-Up</Link>
            </>
            )
        }
        </div>
    </nav>
    );
}
export default NavBar;