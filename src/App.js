import React from 'react';
import { Layout, Menu, Icon, Dropdown } from "antd";
import "./style.less";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <span >退出登录</span>
                </Menu.Item>
            </Menu>
        )


        return (
            <div>
                <Layout>
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
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="home" />首页</span>}>
                               
                                    <Menu.Item key="2">首页概览</Menu.Item>
                                   
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />商品</span>}>
                                    <Menu.Item key="5">商品管理</Menu.Item>
                                    <Menu.Item key="6">品类管理</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="appstore" />订单</span>}>
                                    <Menu.Item key="9">订单管理</Menu.Item>
                                  
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="user" />用户</span>}>
                                    <Menu.Item key="1">用户管理</Menu.Item>
                                  
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content className="content">Content</Content>

                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;


