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
  TOTAL_SUM_SUCCESS,
} from "./cart.type";

const initialState = {
  data: [],
  totalSum: 0,
  loading: false,
  error: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  console.log(state.data.length, "reducer");
  switch (type) {
    case GET_CART_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: state.data.length === 0 ? [] : state.data,
      };
    case GET_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [state.data],
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case POST_CART_LOADING:
      return { ...state, loading: true, error: false, data: [state.data] };
    case POST_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [state.data],
      };
    case POST_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case DELETE_CART_LOADING:
      return { ...state, loading: true, error: false, data: [state.data] };
    case DELETE_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [state.data],
      };
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case UPDATE_CART_LOADING:
      return { ...state, loading: true, error: false, data: [...state.data] };
    case UPDATE_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [state.data],
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case TOTAL_SUM_SUCCESS:
      return {
        ...state,
        totalSum: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
