import React from "react";

import { Table, Pagination } from "antd";
import { connect } from "react-redux";
import PageTitle from "../../components/page-title/";
import { getULData } from "../user/store/userlitst.redux";

import "./style.less";

const Column = Table.Column;

@connect(
    state => state.userListReducer,
    { getULData }
)
class User extends React.Component {

    constructor(props){
        super();
        this.state={
            page:1
        }
    }

    componentDidMount(){
        this.props.getULData(1);
    }

    handlePageChange = (page)=>{
        this.setState({page:page});
        this.props.getULData(page);
    }

    fmtData = (obj) => {
        let date = new Date(obj);
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
    }

    render() {

        const {userList,total} = this.props;
        // console.log(total);
        // if(userList.length){
        //     userList.map(item=>{
        //        console.log("-----",this.fmtData(item.createTime))
        //         return {...item,createTime :this.fmtData(item.createTime)};
        //     })
        //     console.log(userList);
        // }

        return (
            <div>
                <PageTitle title="用户列表" />
                <Table className="user-table" dataSource={userList} pagination={false} >

                    <Column
                        title="ID"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="用户名"
                        dataIndex="username"
                        key="username"
                    />

                    <Column
                        title="邮箱"
                        dataIndex="email"
                        key="email"
                    />
                    <Column
                        title="电话"
                        dataIndex="phone"
                        key="phone"
                    />

                    <Column
                        title="注册时间"
                        dataIndex="createTime"
                        key="createTime"
                    />


                </Table>
                <Pagination defaultCurrent={1}
                    current={this.state.page}
                    total={total} style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default User;