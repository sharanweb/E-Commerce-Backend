import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css"


export const Product = () =>{
    const Navigate = useNavigate()
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page')||1
    const page_size = new URLSearchParams(search).get('pagesize')||4
    const filter = new URLSearchParams(search).get('filter')||"all"
    const sort = new URLSearchParams(search).get('sort')||1;
    // var pageno;


    const [data, setData] = useState([]);
    const [pagenum, setPagenum] = useState();
    // console.log(pagenum)
     let pageno = [];
    for(var i=1;i<=pagenum;i++){
        pageno.push(i)
    }
    // console.log(pageno)



    

    const getData = ()=>{
        axios.get(`http://localhost:5000/products/?page=${page}&pagesize=${page_size}&filter=${filter}&sort=${sort}`).then(({ data }) => {
      setData(data.product);
      setPagenum(data.total_pages);
    })
    console.log(data);
    }
    useEffect(()=>{
      getData();
      
    },[page,filter,sort])


    return (
        <>
        
        <div className="operations">
            <select className="brandFilter" value="filter" onChange={(e)=>{
                Navigate(`/?page=${page}&pagesize=4&filter=${e.target.value}&sort=${sort}`)
            }}>
                <option value="all">Brands</option>
                <option value="MELANGE">MELANGE</option>
                <option value="CODE">CODE</option>
                <option value="GLOBAL">GLOBAL</option>
                <option value="ALLEN SOLLY">ALLEN SOLLY</option>
                <option value="AURELIA">AURELIA</option>

            </select>
            <select className="priceSort" value="sort" onChange={(e)=>{
                Navigate(`/?page=${page}&pagesize=4&filter=${filter}&sort=${e.target.value}`)
            }}>
                <option value="1">Price Sort</option>
                <option value="1">Ascending</option>
                <option value="-1">Descending</option>
            </select>

        </div>
        <div className="mainbox">
            
        {
            data.map((el)=>(
                <div className="product_card" key={el._id}>
                    <div className="imgDiv">
                        <img src={el.image} alt="" className="img" />
                    </div>
                    <div className="main_info">
                        {/* <h3>{el.name}</h3> */}
                        <h3 className="product__brand">{el.name}</h3>
                        <h4 className="product__title">{el.price}</h4>
                        <h5>Rating: {el.rating}</h5>
                    </div>
                </div>
            ))
        }
        </div>
        <div className="pagination">
            {
                pageno.map((el)=>{
                    console.log(el)
                    return (
                        <button onClick={()=>Navigate(`/?page=${el}&pagesize=4&filter=${filter}&sort=${sort}`)}>{el}</button>
                    )
                    })

            }

        </div>
        </>
        
    )

}