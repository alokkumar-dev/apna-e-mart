import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Login } from "../login/login"
import "./CheckoutPage.css";
export const Checkout = () => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  // const  isLogin  = useSelector((store) => store.isLogin);
  const showData = () => {
    let sum = 0;
    // console.log("delete")
    axios.get("https://apna-mart-data.herokuapp.com/cart").then((res) => {
      // setData([...res.data])
      // console.log(res.data)
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          // console.log(data[i].price)
          let x = res.data[i].price.split(",").join("");
          sum += +x;
          // console.log(sum)
          setPrice(sum);
        }
      } else {
        setPrice(0);
      }
    });
  };
  useEffect(() => {
    showData();
    //console.log(showData())
  }, []);
  const nextPage = (e) => {
    e.preventDefault();
    navigate("/payment");
  };
  return (
    <>
      {/* {isLogin.data ? (<> */}
      <h1 style={{ margin: "30px" }}>CHECKOUT</h1>
      <div className="check_div">
        <div id="deliveryForm">
          <h1 style={{ margin: "30px" }}>REGISTER A NEW ADDRESS</h1>
          <form onSubmit={nextPage}>
            <tr>
              <td>
                <h3>FIRST NAME</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Please enter your first name in alphabets."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>LAST NAME</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Please enter your last name in alphabets."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>PINCODE</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="pincode"
                  placeholder="Please enter your Pincode."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>ADDRESS DETAIL 1</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="add1"
                  placeholder="Street & Number, P.O. Boc, C/O"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <h3>ADDRESS DETAIL 2 </h3>
              </td>
              <td>
                <input
                  type="text"
                  id="add2"
                  placeholder="Apt., Suit, Unit, Building, Floor, etc."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>CITY</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="city"
                  placeholder="Please enter your City."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>STATE</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="state"
                  placeholder="Please enter your State."
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>MOBILE PHONE</h3>
              </td>
              <td>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Please enter your Mobile Number."
                  required
                />
              </td>
            </tr>
            <button>CONTINUE TO PAYMENT</button>
          </form>
        </div>
        <div className="price_details">
          <h1>Subtotal</h1>
          <div className="price_div">
            {" "}
            <h3>Cart total :</h3> <h3>₹ {price}.00</h3>{" "}
          </div>
          <div className="price_div">
            <h3>Delivery charge :</h3> <h3>₹ {price > 0 ? 100 : 0}.00</h3>{" "}
          </div>
          <div className="price_total">
            <h3>Total :</h3> <h2>₹ {price > 0 ? price + 100 : 0}.00</h2>
          </div>
        </div>
      </div>
      {/* </>
         )
        :( 
         navigate("/login"))
      } */}
    </>
  );
};
