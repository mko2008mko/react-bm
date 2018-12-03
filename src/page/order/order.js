import React from "react";
import { Button, Table, Divider, Tag, Pagination, message } from "antd";
import { connect } from "react-redux";
import PageTitle from "../../components/page-title/";
import SelectSearch from "../../components/select-search";
import { getOData, searchOData } from "./store/order.redux";

const { Column } = Table;
@connect(
    state => state.orderReducer,
    { getOData, searchOData }
)
class Order extends React.Component {

    constructor(props) {
        super();
        this.state = {
            kwd: '',
            stype: 'productId',
            page: 1
        }
    }

    componentDidMount() {
        this.props.getOData(this.state.page);
    }

    handleClick = (sparams) => {
        console.log(sparams)
        if (sparams.kwd) {
            if (sparams.stype === 'productId' && !(/(^[1-9]\d*$)/.test(sparams.kwd))) {
                message.error('按id查询必须输入正整数');
            } else {
                this.setState({ kwd: sparams.kwd, stype: sparams.stype })
                this.props.searchOData(1, sparams.stype, sparams.kwd);
            }
        } else {
            this.setState({ page: 1 })
            this.props.getOData(1);
        }
    }

    handlePageChange = (page)=>{
        this.setState({ page: page })
        // console.log(this.state.kwd)
        if (this.state.kwd) {
            this.props.searchOData(page, this.state.stype, this.state.kwd);
        } else {
            this.props.getOData(page);
        }

    }

    render() {

        const initSSData = [
            {
                key: 1,
                value: "orderNo",
                text: "按订单号",
            },
            {
                key: 2,
                value: "username",
                text: "按用户名",
            }
        ]

        const {  orderList, total} = this.props;


        return (

            <div>
                <PageTitle title="订单列表" />
                <SelectSearch initSSData={initSSData} handleClick={this.handleClick} />


                <Table dataSource={orderList} pagination={false} >

                    <Column
                        title="订单号"
                        dataIndex="orderNo"
                        key="orderNo"
                    />
                    <Column
                        title="收件人"
                        dataIndex="receiverName"
                        key="receiverName"
                    />

                    <Column
                        title="订单状态"
                        dataIndex="statusDesc"
                        key="statusDesc"
                    />
                    <Column
                        title="订单总价"
                        dataIndex="payment"
                        key="payment"
                    />

                      <Column
                        title="创建时间"
                        dataIndex="createTime"
                        key="createTime"
                    />
                    

                    <Column
                        title="操作"
                        key="action"
                        render={() => (
                            <span>
                                <a href="#:;">详情</a>
                                <Divider type="vertical" />
                                <a href="#:;">编辑</a>
                            </span>
                        )}
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

export default Order;