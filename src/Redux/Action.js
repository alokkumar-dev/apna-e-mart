import axios from "axios";
import {
  ADD_TO_CART,
  FILTER_BOOKS,
  FILTER_CLOTHS,
  FILTER_ELECTRONICS,
  FILTER_SHOES,
  GET_BOOKS,
  GET_CLOTHS,
  GET_DATA,
  GET_ELECTRONICS,
  GET_SHOES,
} from "./ActionType";

export const getCloths = (payload) => ({
  type: GET_CLOTHS,
  payload,
});

export const getShoes = (payload) => ({
  type: GET_SHOES,
  payload,
});

export const getElectronics = (payload) => ({
  type: GET_ELECTRONICS,
  payload,
});
export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});
export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const filterCloths = (payload) => ({
  type: FILTER_CLOTHS,
  payload,
});
export const filterBooks = (payload) => ({
  type: FILTER_BOOKS,
  payload,
});
export const filterShoes = (payload) => ({
  type: FILTER_SHOES,
  payload,
});
export const filterElectronics = (payload) => ({
  type: FILTER_ELECTRONICS,
  payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const cartData = () => (dispatch) => {
  axios.get("https://apna-e-mart.herokuapp.com/cart").then((res) => {
    dispatch(addToCart(res.data));
  });
};
