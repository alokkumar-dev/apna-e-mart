import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getBooks,
  getCloths,
  getElectronics,
  getShoes,
} from "../../Redux/Action";
import "./Home.css";

import MultipleItems from "../Carousel/Carousel";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { cloths } = useSelector((store) => store.cloths);
  const { shoes } = useSelector((store) => store.shoes);
  const { electronics } = useSelector((store) => store.electronics);
  const { books } = useSelector((store) => store.books);

  const navigate = useNavigate();
  const renderCloths = () => {
    axios.get("https://apna-mart-data.herokuapp.com/cloths").then((res) => {
      dispatch(getCloths(res.data.slice(0, 5)));
    });
  };
  const renderShoes = () => {
    axios.get("https://apna-mart-data.herokuapp.com/shoes").then((res) => {
      dispatch(getShoes(res.data.slice(0, 5)));
    });
  };
  const renderElectronics = () => {
    axios.get("https://apna-mart-data.herokuapp.com/electronics").then((res) => {
      dispatch(getElectronics(res.data.slice(0, 5)));
    });
  };
  const renderBooks = () => {
    axios.get("https://apna-mart-data.herokuapp.com/books").then((res) => {
      dispatch(getBooks(res.data.slice(0, 5)));
    });
  };
  useEffect(() => {
    renderCloths();
    renderShoes();
    renderElectronics();
    renderBooks();
  }, []);
  return (
    <>
      <div className="HomeContainer">
        <div className="carouselHomeDiv">
          <MultipleItems />
        </div>
        <h2 className="catgName">Cloths Products</h2>
        <div className="prodsBlock">
          {cloths.map((el) => (
            <Link to={`/cloths/${el._id}`} className="image" key={el._id}>
              {" "}
              <img className="image" src={el.image} alt="" />
            </Link>
          ))}
          <button className="viewAllBtn" onClick={() => navigate("/cloths")}>
            VIEW ALL
          </button>
        </div>
        <h2 className="catgName">Shoes Products</h2>
        <div className="prodsBlock">
          {shoes.map((el) => (
            <Link to={`/shoes/${el._id}`} className="image" key={el._id}>
              {" "}
              <img className="image" src={el.image} alt="" />
            </Link>
          ))}
          <button className="viewAllBtn" onClick={() => navigate("/shoes")}>
            VIEW ALL
          </button>
        </div>
        <h2 className="catgName">Electronics Products</h2>
        <div className="prodsBlock">
          {electronics.map((el) => (
            <Link to={`/electronics/${el._id}`} className="image" key={el._id}>
              {" "}
              <img className="image" src={el.image} alt="" />
            </Link>
          ))}
          <button
            className="viewAllBtn"
            onClick={() => navigate("/electronics")}
          >
            VIEW ALL
          </button>
        </div>
        <h2 className="catgName">Books Products</h2>
        <div className="prodsBlock">
          {books.map((el) => (
            <Link to={`/books/${el._id}`} className="image" key={el._id}>
              {" "}
              <img className="image" src={el.image} alt="" />
            </Link>
          ))}
          <button className="viewAllBtn" onClick={() => navigate("/books")}>
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
};
