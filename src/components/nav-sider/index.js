import React from 'react';
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class NavSider extends React.Component {

    render() {

        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="home" />首页</span>}>

                        <Menu.Item key="2"><Link to={`/`}>首页概览</Link></Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />商品</span>}>

                        <Menu.Item key="5"><Link to={'/commodity'}>商品管理</Link></Menu.Item>

                        <Menu.Item key="6"> <Link to={'/category'}>品类管理</Link></Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" />订单</span>}>
                        <Menu.Item key="9"><Link to={'/order'}>订单管理</Link></Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user" />用户</span>}>
                        <Menu.Item key="1"><Link to={'/user'}>用户管理</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }

}

export default NavSider;