import React from "react";
import {  Button, Table, Divider, Tag, Pagination,message } from "antd";
import { connect } from "react-redux";
import { getCData, searchCData } from "./store/commodity.redux";
import PageTitle from "../../components/page-title/";
import SelectSearch from "../../components/select-search";
import "./style.less";
const { Column } = Table;

@connect(
    state => state.commodityReducer,
    { getCData, searchCData }
)
class Commodity extends React.Component {

    constructor(props) {
        super();
        this.state = {
            kwd: '',
            stype:'productId',
            page: 1
        }
    }

    handleClick = (sparams) => {
        if (sparams.kwd) {
            if(sparams.stype==='productId'&& !(/(^[1-9]\d*$)/.test(sparams.kwd))){
                message.error('按id查询必须输入正整数');
            }else{
                this.setState({ kwd: sparams.kwd,stype:sparams.stype })
                this.props.searchCData(1, sparams.stype, sparams.kwd);
            }
        } else {
            this.setState({ page: 1 })
            this.props.getCData(1);
        }
    }



    componentDidMount() {
        this.props.getCData(this.state.page);
    }

    handlePageChange = (page) => {
        this.setState({ page: page })
        // console.log(this.state.kwd)
        if (this.state.kwd) {
            this.props.searchCData(page, this.state.stype, this.state.kwd);
        } else {
            this.props.getCData(page);
        }

    }

    render() {

        const initSSData = [
            {
                key: 1,
                value: "productId",
                text: "按商品ID查询",
            },
            {
                key: 2,
                value: "productName",
                text: "按商品名称查询",
            }
        ]

        const { commodityList, total } = this.props
        return commodityList.length ? (
            <div>
                <PageTitle title="商品列表" />
                <Button className="commodity-add-btn" type="primary">+添加商品</Button>
                <SelectSearch initSSData={initSSData} handleClick={this.handleClick} />
            

                <Table dataSource={commodityList} pagination={false} >

                    <Column
                        title="商品ID"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="商品信息"
                        dataIndex="name"
                        key="name"
                    />

                    <Column
                        title="价格"
                        dataIndex="price"
                        key="price"
                    />
                    <Column
                        title="状态"
                        dataIndex="status"
                        key="status"
                        render={(status) => (
                            <span>
                                {status}
                                <Tag color="blue" >上架</Tag>
                            </span>
                        )}
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
        ) : <div>"没有获取到数据"</div>;
    }
}

export default Commodity;