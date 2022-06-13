import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartData, getData } from "../../Redux/Action";
import "./ProductDetails.css";
export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.data);
  // const {cart} = useSelector((store)=>store.cart);
  const [prod, setProd] = useState({});

  const { id, category } = useParams();
  const getProduct = () => {
    axios
      .get(`https://apna-mart-data.herokuapp.com/${category}/${id}`)
      .then((res) => {
        setProd(res.data);
        dispatch(getData(res.data));
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handleCart = () => {
    axios.post(`https://apna-mart-data.herokuapp.com/cart`, prod).then(() => {
      alert("Product add successfully");
    });
    dispatch(cartData());
  };
  return (
    <>
      <div className="viewProd_container">
        <div className="prodSide">
          <div className="imageDiv">
            <div className="smallImages">
              <img src={data.image} alt="" />
            </div>
            <div className="largeImage">
              <img src={data.image} alt="" />
            </div>
          </div>
          <div className="description">
            <div className="heading">
              <h1>DESCRIPTION </h1>
              <h4>
                Product ID: <span id="productId">{data.id}</span>
              </h4>
            </div>
            <br />
            <div className="selectOverview">
              <hr />
              <select name="" id="">
                <option value="">Overview</option>
              </select>
            </div>
            <div className="selectOverview">
              <hr />
              <select name="" id="">
                <option value="">Materials</option>
              </select>
            </div>
            <div className="selectOverview">
              <hr />
              <select name="" id="">
                <option value="">Customer Service</option>
              </select>
            </div>
            <div className="selectOverview">
              <hr />
              <select name="" id="">
                <option value="">Return policy</option>
              </select>
            </div>
            <hr />
            <br />
            <br />
            <div className="heading">
              <h1>REVIEWS (0)</h1>
            </div>
            <hr />
            <br />
            <button className="reviewBtn">WRITE A REVIEW</button>
          </div>
        </div>
        <div className="cartSide">
          <div className="content">
            <div>
              <h3>{data.description}</h3>
              <h3>
                <br />
                {data.brand} {data.name}
              </h3>
              <br />
              <h3>{data.category}</h3>
              <br />
              <h4>₹ {data.price}.00</h4>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div id="btnDiv">
            <button id="addtoCart" onClick={handleCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
