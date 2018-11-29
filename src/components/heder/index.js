import React from 'react';
import { Layout, Menu, Icon, Dropdown } from "antd";
const { Header } = Layout;

class HeaderComponent extends React.Component {

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <span>退出登录</span>
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