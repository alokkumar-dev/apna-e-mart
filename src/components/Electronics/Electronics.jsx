import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterElectronics, getElectronics } from "../../Redux/Action";
import "./Electronics.css";
export const Electronics = () => {
  const dispatch = useDispatch();
  const { electronics } = useSelector((store) => store.electronics);
  const navigate = useNavigate();
  const filterElectronic = useSelector(
    (store) => store.electronics.filterElectronics
  );
  const renderCloths = () => {
    axios.get("https://apna-e-mart.herokuapp.com/electronics").then((res) => {
      dispatch(getElectronics(res.data));
      // console.log(res.data);
    });
  };
  useEffect(() => {
    renderCloths();
  }, []);

  const handleSort = (e) => {
    const { id, value } = e.target;

    if (id == "sortingData" && value == "low") {
      electronics.sort(
        (a, b) => a.price.split(",").join("") - b.price.split(",").join("")
      );
      dispatch(getElectronics(electronics));
    }
    if (id == "sortingData" && value == "high") {
      electronics.sort(
        (a, b) => b.price.split(",").join("") - a.price.split(",").join("")
      );
      dispatch(getElectronics(electronics));
    }
    if (id == "filterData") {
      dispatch(filterElectronics(value));
    }
  };

  return (
    <>
      <div className="sortFilterDiv">
        <div className="sortingDiv">
          <select
            name=""
            id="filterData"
            className="sorting"
            onChange={handleSort}
          >
            <option value="">Filter by Category</option>
            <option value="Watches">WATHCES</option>
            <option value="Earbuds">EARBUDS</option>
          </select>
        </div>
        <div className="sortingDiv">
          <select name="" id="sortingData" onChange={handleSort}>
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
      <div className="clothsContainer">
        {electronics &&
          filterElectronic.map((el) => (
            <Link
              to={el._id}
              key={el._id}
              onClick={() => navigate(`/electronics/${el.id}`)}
              className="cart"
            >
              <div className="imgDiv">
                <img src={el.image} alt="" />
              </div>
              <div className="aboutProd">
                <div className="size">
                  <h4>{el.brand}</h4>
                  <h4>{el.category}</h4>
                </div>
                <h4>{el.description}</h4>
                <h4>₹ {el.price}</h4>
              </div>
              {/* <button className="addToCartBtn">Add to cart</button> */}
            </Link>
          ))}
      </div>
    </>
  );
};
