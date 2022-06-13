// login reducer

import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
  } from "./Action";
  
  const initialState = {
    isLoading: false,
    isError: false,
    data: JSON.parse(localStorage.getItem("userDetails")) || null,
  };
  
  export const loginReducer = (state = initialState, action) => {
      switch (action.type) {
          case LOGIN_REQUEST:
          return {
              ...state,
              isLoading: true,
              isError: false,
              data: action.payload
          };
          case LOGIN_SUCCESS:
          return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload
          };
          case LOGIN_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true,
              data: action.payload
          };
          case LOGOUT_SUCCESS:
          return {
              ...state,
              isLoading: false,
              isError: false,
              data: null
          }
          default:
          return state;
      }
  }