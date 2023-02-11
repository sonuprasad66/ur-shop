import * as types from "./actionTypes";

const initialState = {
  products: [],
  filterProducts: [],
  productsDetails: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, products: [] };

    case types.GET_FILTER_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_FILTER_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterProducts: payload,
      };

    case types.GET_FILTER_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, filterProducts: [] };

    case types.GET_PRODUCTS_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productsDetails: payload,
      };

    case types.GET_PRODUCTS_DETAILS_FAILURE:
      return { ...state, isLoading: false, isError: true, productsDetails: {} };

    default:
      return state;
  }
};
