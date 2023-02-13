import axios from "axios";
import {
  DELETE_CART_ERROR,
  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  POST_CART_ERROR,
  POST_CART_LOADING,
  POST_CART_SUCCESS,
  UPDATE_CART_ERROR,
  UPDATE_CART_LOADING,
  UPDATE_CART_SUCCESS,
} from "./cart.type";
const token = localStorage.getItem("token");

export const getCartData = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    const res = await axios.get("http://localhost:8080/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return dispatch({ type: GET_CART_SUCCESS, payload: res.data });
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: GET_CART_ERROR });
  }
};

export const addCartData = (data) => async (dispatch) => {
  dispatch({ type: POST_CART_LOADING });
  try {
    const res = await axios.post("http://localhost:8080/cart", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data);
    dispatch({ type: POST_CART_SUCCESS, payload: res.data });
    dispatch(getCartData());
    return res.data;
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: POST_CART_ERROR });
  }
};

export const deleteCartData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CART_LOADING });
  try {
    const res = await axios.delete(`http://localhost:8080/cart/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data);
    dispatch({ type: DELETE_CART_SUCCESS, payload: res });
    dispatch(getCartData());
    return res;
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: DELETE_CART_ERROR });
  }
};

export const updateCartData = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_LOADING });
  console.log(id, data);
  try {
    const res = await axios.patch(
      `http://localhost:8080/cart/${id}`,
      { qty: data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(res.data);
    dispatch({ type: UPDATE_CART_SUCCESS, payload: res });
    dispatch(getCartData());
    return res.data;
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: UPDATE_CART_ERROR });
  }
};
