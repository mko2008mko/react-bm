import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


@connect(
    state => state.loginRducer
)

class AuthRouter extends React.Component {

    render() {
        const {userInfo} = this.props
        console.log(userInfo);
        return userInfo?null:<Redirect to={`/login`}/>;
    }
}

export default AuthRouter;