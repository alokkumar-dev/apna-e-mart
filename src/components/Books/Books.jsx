import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterBooks, getBooks } from "../../Redux/Action";
import "./Books.css";
export const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);
  const filterBook = useSelector((store) => store.books.filterBooks);
  const navigate = useNavigate();
  const renderCloths = () => {
    axios.get("https://apna-e-mart.herokuapp.com/books").then((res) => {
      dispatch(getBooks(res.data));
      // console.log(res.data);
    });
  };
  useEffect(() => {
    renderCloths();
  }, []);

  const handleSort = (e) => {
    const { id, value } = e.target;
    if (id == "sortingData" && value == "low") {
      books.sort((a, b) => a.price - b.price);
      dispatch(getBooks(books));
    }
    if (id == "sortingData" && value == "high") {
      books.sort((a, b) => b.price - a.price);
      dispatch(getBooks(books));
    }
    if (id == "filterData") {
      // console.log(value);
      dispatch(filterBooks(value));
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
            <option value="">Filter by Language</option>
            <option value="ENGLISH">ENGLISH</option>
            <option value="HINDI">HINDI</option>
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
      <div className="booksContainer">
        {books &&
          filterBook.map((el) => (
            <Link
              key={el._id}
              to={el._id}
              onClick={() => navigate(`/books/${el.id}`)}
              className="cart"
            >
              <div className="imgDiv">
                <img src={el.image} alt="" />
              </div>
              <div className="aboutProd">
                <div className="size">
                  <h4>{el.name}</h4>
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
