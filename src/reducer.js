import { combineReducers } from "redux";
import { loginRducer } from "./page/login/store/login.redux";
import { homeReducer } from "./page/home/store/home.redux";
import { commodityReducer } from "./page/commodity/store/commodity.redux";

export default combineReducers({ loginRducer, homeReducer, commodityReducer });