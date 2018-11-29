import React from "react";
import { Card, Icon } from "antd";
import PageTitle from "../../components/page-title"
import "./style.less";
import { connect } from "react-redux";
import { getBaseCountData } from "./store/home.redux";
import { Link } from "react-router-dom";
import Authrouter from "../../components/authrouter/authrouter";

@connect(
    state => state.homeReducer,
    { getBaseCountData }
)
class Home extends React.Component {

    componentDidMount() {
        this.props.getBaseCountData();
    }

    render() {

        const { baseCountData } = this.props
        // console.log(baseCountData);

        return (
            <div className="home-wrapper">
            <Authrouter/>
                <PageTitle title="首页" />
                {baseCountData ?
                    <div className="card-wrapper">
                        <Link to={`/user`}>
                            <Card
                                title="用户总数"
                                extra={<Icon type="user" />}
                                style={{ width: 300 }}
                            >
                                <p>{baseCountData.userCount}</p>

                            </Card>
                        </Link>
                        <Link to={`/commodity`}>
                            <Card
                                title="商品总数"
                                extra={<Icon type="laptop" />}
                                style={{ width: 300 }}
                            >
                                <p>{baseCountData.productCount}</p>

                            </Card>
                        </Link>
                        <Link to={`/order`}>
                            <Card
                                title="订单总数"
                                extra={<Icon type="appstore" />}
                                style={{ width: 300 }}
                            >
                                <p>{baseCountData.orderCount}</p>

                            </Card>
                        </Link>
                    </div>
                    : null
                }

            </div>
        );
    }
}

export default Home;