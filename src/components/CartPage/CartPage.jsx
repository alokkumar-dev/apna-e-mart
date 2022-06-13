import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartData } from "../../Redux/Action";
import "./CartPage.css";
export const Cart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showData = () => {
    let sum = 0;
    axios.get("https://apna-mart-data.herokuapp.com/cart").then((res) => {
      setData([...res.data]);
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          let x = res.data[i].price.split(",").join("");
          sum += +x;
          setPrice(sum);
        }
      } else {
        setPrice(0);
      }
    });
  };
  useEffect(() => {
    showData();
  }, []);
  let handleDelete = (e) => {
    axios
      .delete(`https://apna-mart-data.herokuapp.com/cart/${e}`)
      .then()
      .then(() => {
        showData();
      });
    dispatch(cartData());
  };
  return (
    <>
      <div className="name_div">
        <h2>Cart Items</h2>
        <button onClick={() => navigate("/checkout")} className="check_button">
          Checkout page{" "}
        </button>
      </div>
      <div className="cart_div">
        <div className="cart_prod">
          {data.map((e) => (
            <div className="ca_div" key={e.id}>
              <div>
                <img src={e.image} alt="" />
              </div>
              <div className="det_div">
                <h2>{e.name}</h2>
                <h3>Price : ₹ {e.price}</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "40px",
                  }}
                >
                  <h3>Quantity :1</h3>
                  <button onClick={() => handleDelete(e._id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
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
    </>
  );
};
