import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducers,
} from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducer,
  user: userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
