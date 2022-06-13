
// action types

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// action creators

export const loginRequest = ({phone, password}) => ({
    type: LOGIN_REQUEST,
    payload: {phone, password}
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const logoutRequest = () => ({
    type: LOGOUT_SUCCESS,
    payload: null

});