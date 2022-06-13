
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

   

    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.post("https://localhost:5000/register", data)
            .then(res => console.log(res))
            .then(alert( "Account Created Successfully!"))
            .then(navigate("/"))
            .catch(err=> alert("Try Again"));
        
       
    }

    return (
        <div className="signup_div">
            <form className="register_form" onSubmit={handleSubmit}>
                <input type="text" 
                    value={data.first_name} 
                    name="first_name" 
                    onChange={handleChange} 
                    placeholder="First Name" />
                <input type="text" 
                    value={data.last_name} 
                    name="last_name" 
                    onChange={handleChange} 
                    placeholder="Last Name" />
                <input type="email" 
                    value={data.email} 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email" />
                <input type="password" 
                    value={data.password} 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password" />
                <input type="submit" value="Sign Up" className="submit_btn" />
            </form>

            <div className="toggle_btn">Already Have an Account? <Link to="/"><span>Sign In</span></Link> </div>
        </div>
    )
}