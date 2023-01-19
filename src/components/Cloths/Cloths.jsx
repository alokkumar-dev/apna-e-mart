import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterCloths, getCloths } from "../../Redux/Action";
import "./Cloths.css";
export const Cloths = () => {
  const dispatch = useDispatch();
  const { cloths } = useSelector((store) => store.cloths);
  const filterCloth = useSelector((store) => store.cloths.filterCloths);

  const navigate = useNavigate();
  const renderCloths = () => {
    axios.get("https://hilarious-erin-shoulder-pads.cyclic.app/cloth").then((res) => {
      dispatch(getCloths(res.data));
    });
  };
  useEffect(() => {
    renderCloths();
  }, []);
  const handleSort = (e) => {
    const { id, value } = e.target;

    if (id == "sortingData" && value == "low") {
      cloths.sort(
        (a, b) => a.price.split(",").join("") - b.price.split(",").join("")
      );
      dispatch(getCloths(cloths));
    }
    if (id == "sortingData" && value == "high") {
      cloths.sort(
        (a, b) => b.price.split(",").join("") - a.price.split(",").join("")
      );
      dispatch(getCloths(cloths));
    }
    if (id == "filterByCateg") {
      dispatch(filterCloths(value));
    }
  };

  return (
    <>
      <div className="sortFilterDiv">
        <div className="sortingDiv">
          <select
            name=""
            id="filterByCateg"
            className="sorting"
            onChange={handleSort}
          >
            <option value="">Filter by Gender</option>
            <option value="MEN">MALE</option>
            <option value="WOMEN">FEMALE</option>
          </select>
        </div>
        <div className="sortingDiv">
          <select
            name=""
            id="sortingData"
            className="sorting"
            onChange={handleSort}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
      <div className="clothsContainer">
        {cloths &&
          filterCloth.map((el) => (
            <Link
              to={el._id}
              key={el._id}
              onClick={() => navigate(`/cloths/${el.id}`)}
              className="cart"
            >
              <div className="imgDiv">
                <img src={el.image} alt="" />
              </div>
              <div className="aboutProd">
                <div className="size">
                  <h4>{el.category}</h4>
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
