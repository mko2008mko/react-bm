import { combineReducers } from "redux";
import { loginRducer } from "./page/login/store/login.redux";
import { homeReducer } from "./page/home/store/home.redux";

export default combineReducers({ loginRducer, homeReducer });