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

const initState = {
  data: [],
  cart: [],
  shoes: [],
  books: [],
  cloths: [],
  electronics: [],
  filterBooks: [],
  filterShoes: [],
  filterCloths: [],
  filterElectronics: [],
};

export const Reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_CLOTHS:
      return { ...store, cloths: payload, filterCloths: payload };
    case FILTER_CLOTHS:
      return { ...store, filterCloths: [...filterData(store.cloths, payload)] };
    case GET_SHOES:
      return { ...store, shoes: payload, filterShoes: payload };
    case FILTER_SHOES:
      return { ...store, filterShoes: [...filterData(store.shoes, payload)] };
    case GET_ELECTRONICS:
      return { ...store, electronics: payload, filterElectronics: payload };
    case FILTER_ELECTRONICS:
      return {
        ...store,
        filterElectronics: [...filterData(store.electronics, payload)],
      };
    case GET_BOOKS:
      return { ...store, books: payload, filterBooks: payload };
    case FILTER_BOOKS:
      return { ...store, filterBooks: [...filterData(store.books, payload)] };
    case GET_DATA:
      return { ...store, data: payload };
    case FILTER_CLOTHS:
      return { ...store, filterCloths: payload };
    case ADD_TO_CART:
      return { ...store, cart: payload };
    default:
      return store;
  }
};

const filterData = (data, value) => {
  let newData;
  if (value == "MEN" || value == "WOMEN") {
    newData = data.filter((e) => e.category == value);
  }
  if (value == "ENGLISH" || value == "HINDI") {
    newData = data.filter((e) => e.category == value);
  }
  if (value == "MALE" || value == "WOMEN") {
    newData = data.filter((e) => e.category == value);
  }
  if (value == "Watches" || value == "Earbuds") {
    newData = data.filter((e) => e.category == value);
  }
  return newData;
};
