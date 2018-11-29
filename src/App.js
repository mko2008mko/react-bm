import React from 'react';
import { Layout } from "antd";
import RouterMap from "./rouoter/router-map";
import Header from "./components/heder";
import NavSider from "./components/nav-sider"
// import AuthRouter from "./components/authrouter/authrouter";


import "./style.less";
const { Content } = Layout;

class App extends React.Component {

    render() {
        return (
            <div>
                <Layout>
                    
                    <Header />
                    <Layout>
                        <NavSider />
                        <Content className="content">
                            <RouterMap />
                        </Content>
                    </Layout>

                </Layout>
            </div >
        );
    }
}

export default App;


