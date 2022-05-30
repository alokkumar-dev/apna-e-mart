import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartData } from "../../Redux/Action"
// import { cartData } from "../../redux/action"
import "./CartPage.css"
export const Cart =()=>{
    const {cart} =useSelector((store)=>store.cart)
    const [data,setData] =useState([])
    const [price,setPrice] =useState(0)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    // console.log({cart})
      
    const showData=()=>{
        let sum=0
       // console.log("delete")
        axios.get("https://apna-e-mart.herokuapp.com/cart").then((res)=>{
            setData([...res.data])
           // console.log(res.data)
            if(res.data.length>0){

                for(let i=0;i<res.data.length;i++){
                       // console.log(data[i].price)
                        let x =  res.data[i].price.split(",").join("")
                        sum += +x     
                       // console.log(sum)  
                         setPrice(sum)
                  }
                }else{
                    setPrice(0)
                }
            })
    }
    useEffect(()=>{
     showData()
        //console.log(showData())
        
    },[])
    let handleDelete=(e)=>{
        axios.delete(`https://apna-e-mart.herokuapp.com/cart/${e}`).then(
            //alert("removed")
        ).then(()=>{
            showData() 
        })
        dispatch(cartData())
    }
    return(
        <>
        <div className="name_div">
            <h2>Cart Items</h2>
            <button onClick={()=>navigate("/checkout")} className="check_button">Checkout page </button>
        </div>
        <div className="cart_div">
            {/* <h1>cart page</h1> */}
            <div className="cart_prod">
            {data.map((e)=>(
            <div className="ca_div" key={e.id}>
              <div>
                  <img src={e.image} alt="" />
              </div>
              <div className="det_div">
                 <h2>{e.name}</h2>
                 <h3>Price : ₹ {e.price}</h3>
                 <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px"}}>
                 <h3>Quantity :1</h3>
                 <button onClick={()=>handleDelete(e._id)}>Remove</button>
                 </div>
                 
              </div>
            </div>
            )
            )} 
            </div>
            <div className="price_details">
                <h1>Subtotal</h1>
                <div className="price_div"> <h3>Cart total  :</h3>  <h3>₹ {price}.00</h3> </div>
                <div className="price_div"><h3>Delivery charge :</h3>   <h3>₹ {price>0?100:0}.00</h3> </div>
                <div className="price_total"><h3>Total :</h3> <h2>₹ {price>0?price+100:0}.00</h2></div>
            </div>

        </div>
        </>
    )
}