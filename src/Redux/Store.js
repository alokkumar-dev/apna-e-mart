import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const reducer = combineReducers({
  cloths: Reducer,
  electronics: Reducer,
  shoes: Reducer,
  books: Reducer,
  data: Reducer,
  cart: Reducer,
});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
