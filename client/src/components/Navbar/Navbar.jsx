import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return (
        <div className="Navbar">
            <h1>MY STORE</h1>
            <div className="opdiv">
                <div>
                    <Link to="/">Login</Link></div>
                <div>
                    <Link to="/signup">Signup</Link></div>
                <div>
                    <Link to="/cart">Cart</Link></div>


            </div>

        </div>
    )
}