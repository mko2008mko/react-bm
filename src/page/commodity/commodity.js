import React from "react";
import { Select, Input, Button, Table, Divider, Tag, Pagination } from "antd";
import { connect } from "react-redux";
import { getCData, searchCData } from "./store/commodity.redux";
import PageTitle from "../../components/page-title/";
import "./style.less";
const Option = Select.Option;
const { Column } = Table;

@connect(
    state => state.commodityReducer,
    { getCData, searchCData }
)
class Commodity extends React.Component {

    constructor(props) {
        super();
        this.state = {
            stype: 'productId',
            kwd: ''
        }
    }

    handleClick = () => {
        console.log(this.state);
        if (this.state.kwd) {
            this.props.searchCData(1, this.state.stype, this.state.kwd);
        }
    }

    handleSelectChange = (value) => {
        // console.log(`selected ${value}`);
        // this.props.setSearchType(value);
        this.setState({ stype: value });
    }

    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({ kwd: e.target.value })
    }

    componentDidMount() {
        this.props.getCData(1);
    }

    handlePageChange = (page) => {
        if (this.state.kwd) {
            this.props.searchCData(page, this.state.stype, this.state.kwd);
        } else {
            this.props.getCData(page);
        }

    }

    render() {

        const { commodityList, total } = this.props
        return commodityList.length ? (
            <div>
                <PageTitle title="商品列表" />
                <Button className="commodity-add-btn" type="primary">+添加商品</Button>
                <div className="commodity-search-wrapper">
                    <Select defaultValue="productId" style={{ width: 160, marginRight: 20 }} onChange={this.handleSelectChange}>
                        <Option value="productId">按商品ID查询</Option>
                        <Option value="productName">按商品名称查询</Option>
                    </Select>
                    <Input placeholder="关键词"
                        style={{ width: 200, marginRight: 20 }}
                        value={this.state.kwd}
                        onChange={this.handleInputChange} />
                    <Button type="primary" onClick={this.handleClick}>搜索</Button>
                </div>

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
                    total={total} style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}
                    onChange={this.handlePageChange}
                />
            </div>
        ) : <div>"没有获取到数据"</div>;
    }
}

export default Commodity;