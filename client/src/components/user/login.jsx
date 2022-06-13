
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


export const Login = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        userId: "",
        user: ""
    })

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const [getData, setGetData] = useState()


    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }


    const handleSubmit = (data) => {
        navigate("/products");
        alert(
            "Login Successful", 
        )

        try{
            fetch(`https://localhost:5000/login`,{
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json",
                }

            });
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(()=> {
        setTimeout(()=> {
            
            setTimeout(() => {
                navigate("/products");

            }, 10000)

        }, 1)
    }, [handleSubmit]);

    return (
        <div className="login_mainDiv">
            <form className="register" onSubmit={handleSubmit}>
                <input type="email" value={data.email} name="email" onChange={handleChange} placeholder="Email" />
                <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Password" />
                <input type="submit" value="Sign In" className="submit_btn" />
            </form>

            <div className="alter_btn">New User? <Link to="/signup"><span>Create an Account</span></Link> </div>
        </div>
    )
}