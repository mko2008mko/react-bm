import { combineReducers } from "redux";
import { loginRducer } from "./page/login/store/login.redux";
import { homeReducer } from "./page/home/store/home.redux";
import { commodityReducer } from "./page/commodity/store/commodity.redux";
import { orderReducer } from "./page/order/store/order.redux";
import { userListReducer } from "./page/user/store/userlitst.redux";
import { categroyReducer } from "./page/category/store/category.redux";

export default combineReducers({
    loginRducer, homeReducer, commodityReducer
    , orderReducer, userListReducer, categroyReducer
});