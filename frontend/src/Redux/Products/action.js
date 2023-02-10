import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllProducts`, params)
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

export const getFilterProducts = (params) => (dispatch) => {
  dispatch({ type: types.GET_FILTER_PRODUCTS_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllFilterProducts`, params)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_FILTER_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_FILTER_PRODUCTS_FAILURE,
        payload: err,
      });
    });
};
