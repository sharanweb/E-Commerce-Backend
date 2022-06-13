import {Route, Routes} from "react-router-dom";
import {Product} from "../components/Product";
import {Cart} from "../components/Cart/Cart";
import{Navbar} from "../components/Navbar/Navbar";
import {Login} from "../components/user/login"
import {Signup} from "../components/user/signup"

export const AllRoutes = ()=>{
    return (
        <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/products" element={<Product></Product>}></Route>
            <Route path = "/cart" element={<Cart></Cart>}></Route>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>

        </Routes>
        </>
    )
}