import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as ProductsReducer } from "./Products/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  ProductsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
