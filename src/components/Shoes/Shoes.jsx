import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterShoes, getShoes } from "../../Redux/Action";
import "./Shoes.css";
export const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes } = useSelector((store) => store.shoes);
  const navigate = useNavigate();
  const filterShoe = useSelector((store) => store.shoes.filterShoes);

  const renderCloths = () => {
    axios.get("https://hilarious-erin-shoulder-pads.cyclic.app/appliances").then((res) => {
      dispatch(getShoes(res.data));
    });
  };
  useEffect(() => {
    renderCloths();
  }, []);

  const handleSort = (e) => {
    const { id, value } = e.target;

    if (id == "sortingData" && value == "low") {
      shoes.sort(
        (a, b) => a.price.split(",").join("") - b.price.split(",").join("")
      );
      dispatch(getShoes(shoes));
    }
    if (id == "sortingData" && value == "high") {
      shoes.sort(
        (a, b) => b.price.split(",").join("") - a.price.split(",").join("")
      );
      dispatch(getShoes(shoes));
    }
    if (id == "filterData") {
      dispatch(filterShoes(value));
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
            <option value="">Filter by Gender</option>
            <option value="MEN">MALE</option>
            <option value="WOMEN">FEMALE</option>
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
        {shoes &&
          filterShoe.map((el) => (
            <Link
              key={el._id}
              to={el._id}
              onClick={() => navigate(`/shoes/${el.id}`)}
              className="cart"
            >
              <div className="imgDiv">
                <img src={el.image} alt="" />
              </div>
              <div className="aboutProd">
                <div className="size">
                  <h4>{el.brand}</h4>
                  <h4>{el.size}</h4>
                </div>
                <h4>{el.description}</h4>
                <h4>₹ {el.price}</h4>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
