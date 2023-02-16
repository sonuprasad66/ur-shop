import axios from "axios";
import {
  DELETE_WISHLIST_ERROR,
  DELETE_WISHLIST_LOADING,
  DELETE_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_LOADING,
  GET_WISHLIST_SUCCESS,
  POST_WISHLIST_ERROR,
  POST_WISHLIST_LOADING,
  POST_WISHLIST_SUCCESS,
} from "./type";

const token = localStorage.getItem("token");

export const getWishListData = () => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_LOADING });
  try {
    const res = await axios.get("http://localhost:8080/wishlist", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return dispatch({ type: GET_WISHLIST_SUCCESS, payload: res.data });
  } catch (er) {
    return dispatch({ type: GET_WISHLIST_ERROR });
  }
};

export const addWishListData = (data) => async (dispatch) => {
  dispatch({ type: POST_WISHLIST_LOADING });
  try {
    const res = await axios.post("http://localhost:8080/wishlist", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: POST_WISHLIST_SUCCESS, payload: res.data });
    dispatch(getWishListData());
    return res.data;
  } catch (er) {
    return dispatch({ type: POST_WISHLIST_ERROR });
  }
};

export const deleteWishListData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_WISHLIST_LOADING });
  try {
    const res = await axios.delete(`http://localhost:8080/wishlist/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: DELETE_WISHLIST_SUCCESS, payload: res.data });
    dispatch(getWishListData());
    return res.data;
  } catch (er) {
    return dispatch({ type: DELETE_WISHLIST_ERROR });
  }
};
