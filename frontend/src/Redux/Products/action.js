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

// ----------------------- Products Details --------------------------

export const getProductsDetails = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_DETAILS_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllProductsDetails/${params}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_FAILURE,
        payload: err,
      });
    });
};

// ----------------------- sort by price --------------------------

export const getAllDataSortByPrice = (params) => (dispatch) => {
  dispatch({ type: types.SORTED_BY_PRICE_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllProductsSortByPrice?order=${params}`)
    .then((res) => {
      return dispatch({
        type: types.SORTED_BY_PRICE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.SORTED_BY_PRICE_FAILURE,
        payload: err,
      });
    });
};

export const getAllDataSortByDiscount = (params) => (dispatch) => {
  dispatch({ type: types.SORTED_BY_DISCOUNT_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllProductsSortByDiscount?order=${params}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.SORTED_BY_DISCOUNT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.SORTED_BY_DISCOUNT_FAILURE,
        payload: err,
      });
    });
};

export const getAllDataSortByRating = (params) => (dispatch) => {
  dispatch({ type: types.SORTED_BY_RATING_REQUEST });
  return axios
    .get(`http://localhost:8080/getAllProductsSortByRating?order=${params}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.SORTED_BY_RATING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.SORTED_BY_RATING_FAILURE,
        payload: err,
      });
    });
};
