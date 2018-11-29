import React from 'react';
import { Layout, Menu, Icon, Dropdown } from "antd";
import { connect } from "react-redux";
import { userLogOut } from "../../page/login/store/login.redux";

const { Header } = Layout;


@connect(
    null,
    { userLogOut }
)
class HeaderComponent extends React.Component {

    handleLogOut = () => {
        this.props.userLogOut();
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <span onClick={this.handleLogOut}>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return (
            <Header className="header">
                <div className="logo">
                    <h1>商城后台</h1>
                </div>

                <div className="user-center">
                    <Dropdown overlay={menu}>
                        <span><Icon type="user" />&nbsp;&nbsp;欢迎您xxx&nbsp;&nbsp;<Icon type="down" /></span>
                    </Dropdown>
                </div>

            </Header>
        );
    }

}

export default HeaderComponent;