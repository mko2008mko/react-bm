import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "../page/category/category";
import Commodity from "../page/commodity/commodity";
import Home from "../page/home/home";
import Order from "../page/order/order";
import User from "../page/user/user";
import Add from "../page/category/add";
import CommodityAdd from "../page/commodity/commodityAdd";
import CommodityDetail from "../page/commodity/commodity-detail";



class RouterMap extends React.Component {

    render() {
        return (
            // <BrowserRouter>

            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/category/add" component={Add} />
                <Route path="/category/:categoryId?" component={Category} />
                <Route exact path="/category/add" component={Add} />
                <Route exact path="/commodity/add" component={CommodityAdd} />
                <Route exact path="/commodity/detail/:productId?" component={CommodityDetail}/>
                <Route path="/commodity" component={Commodity} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />

            </Switch>

            // </BrowserRouter>

        )
    }
}

export default RouterMap;