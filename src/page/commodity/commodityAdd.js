import React from "react";
import { Row, Input, Select, InputNumber, Button, message } from "antd";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { putCommodityData, clearFlag } from "./store/commodity.redux";
import PicturesWall from "../../components/picture-wall";

import PageTitle from "../../components/page-title";

const Option = Select.Option;

@connect(
    state => state.commodityReducer,
    { putCommodityData, clearFlag }
)
class CommodityAdd extends React.Component {

    constructor(prpos) {
        super();
        this.state = {
            oneCategoryId: 0,
            twoCategoryId: 0,
            commodityName: '',
            commodityDesc: '',
            commodityPrice: 0,
            commodityStock: 0

        }
    }

    componentDidMount() {
        this.props.clearFlag();
    }

    handleSelectChange = (e) => {
        // console.log(e);
        this.setState({
            oneCategoryId: e
        })
    }

    handleSelectChange2 = (e) => {
        this.setState({
            twoCategoryId: e
        })
    }

    handleInputChange = (k, v) => {
        // console.log(k, v.target.value);
        this.setState({
            [k]: v.target.value
        })
    }

    handleInputNumberChange = (k, v) => {
        // console.log(k,v);
        this.setState({
            [k]: v
        })
    }

    handleBtnClick = () => {
        // console.log(this.state);
        if (!this.state.commodityName) {
            message.error('输入商品名称');
        } else if (!this.state.commodityDesc) {
            message.error('输入商品描述');
        } else if (!this.state.oneCategoryId) {
            message.error('请选择一级分类');
        } else if (!this.state.twoCategoryId) {
            message.error('请选择二级分类');
        } else if (!this.state.commodityPrice) {
            message.error('输入商品价格');
        } else if (!this.state.commodityStock) {
            message.error('输入商品库存');
        } else {
            this.props.putCommodityData(this.state);
        }
    }

    render() {

        const { putFlag } =this.props;
        if(putFlag){
            this.props.history.goBack();
        }

        return (
            <div>
                <PageTitle title="添加分类" />
                <div className="commodity-add-container">
                    <Row>
                        <span>商品名称</span>
                        <Input placeholder="请输入商品名称" style={{ width: 320 }}
                            onChange={this.handleInputChange.bind(this, 'commodityName')}
                        // value={this.state.categoryName} 
                        />
                    </Row>
                    <Row>
                        <span>商品描述</span>
                        <Input placeholder="请输入商品描述" style={{ width: 320 }}
                            onChange={this.handleInputChange.bind(this, 'commodityDesc')}
                        // value={this.state.categoryName} 
                        />
                    </Row>
                    <Row>
                        <span>所属分类</span>
                        {/* <Select 
                        defaultValue={categoryList[0].id} style={{ width: 320 }} onChange={this.handleSelectChage}>
                            {categoryList.map(item => (
                                <Option value={item.id} key={item.id}>{item.name}</Option>
                            ))}

                        </Select> */}
                        <Select
                            onChange={this.handleSelectChange}

                            style={{ width: 320 }}
                        >
                            <Option value={10002} >xxxxx1</Option>
                            <Option value={10003} >xxxxx2</Option>
                            <Option value={10004} >xxxxx3</Option>
                        </Select>
                        {this.state.oneCategoryId ?
                            (<Select
                                onChange={this.handleSelectChange2}

                                style={{ width: 320 }}
                            >
                                <Option value={20002} >xxxxx12</Option>
                                <Option value={20003} >xxxxx22</Option>
                                <Option value={20004} >xxxxx32</Option>
                            </Select>)
                            : null}

                    </Row>

                    <Row>
                        <span>商品价格</span>
                        <InputNumber min={1} max={100} defaultValue={1} placeholder="价格"
                            onChange={this.handleInputNumberChange.bind(this, 'commodityPrice')}
                        />
                    </Row>
                    <Row>
                        <span>商品库存</span>
                        <InputNumber min={1} max={100} defaultValue={1} placeholder="库存"
                            onChange={this.handleInputNumberChange.bind(this, 'commodityStock')}
                        />
                    </Row>
                    <PicturesWall />
                    <Row>
                        <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                    </Row>
                </div>
            </div>
        ) 
    }
}

export default CommodityAdd;