import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "../page/category/category";
import Commodity from "../page/commodity/commodity";
import Home from "../page/home/home";
import Order from "../page/order/order";
import User from "../page/user/user";


class RouterMap extends React.Component {

    render() {
        return (
            // <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/commodity" component={Commodity} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    
                </Switch>
            // </BrowserRouter>

        )
    }
}

export default RouterMap;