import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css"



export const Cart = () =>{

    const [cartdata, setCartData] = useState([]);
    const [total, setTotal] = useState(0);
   
    const getData = ()=>{
        axios.get(`http://localhost:5000/cart/usercart?user_id=62a2292ad1dced074552a4a4`).then(({ data }) => {
      setCartData(data.Cart[0].products);
     setTotal(data.sum[0].TotalPrice)
    // console.log(data.Cart[0].products);
    })
    
    }
    useEffect(()=>{
      getData();
    },[])


    return (
        <>
        
        
        <div className="mainbox">
            {/* {
                cartdata.map((el)=>{
                    return (
                        <h1>{el.price}</h1>
                    )
                })
            } */}

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th className="name">Name</th>
                        <th className="amount">Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartdata.map((el)=>{
                            return(
                                <tr key={el._id}>
                                    <td>
                                        <img src={el.image} width="100px"></img>
                                    </td>
                                    <td className="name">{el.name}</td>
                                    <td className="amount">{el.price}</td>
                                    <td>
                                        <button className="del">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
        <h1>Total AMOUNT:{total} </h1>
        
        </>
        
    )

}