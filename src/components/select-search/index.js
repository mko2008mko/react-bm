import React from "react";
import { Select, Input, Button } from "antd";
import "./style.less";

const Option = Select.Option;

class SelectSearch extends React.Component {

    constructor(props){
        super();
        let initvalue = props.initSSData[0].value
        console.log(initvalue)
        this.state = {
            stype:initvalue,
            kwd: ''
        }
    }

    handleClick = () => {
        // console.log(this.state);
        this.props.handleClick(this.state);
        
        
    }

    handleSelectChange = (value) => {
        this.setState({ stype: value });
    }

    handleInputChange = (e) => {
       
        this.setState({ kwd: e.target.value })
    }

    render() {

        const { initSSData } = this.props;

        return initSSData.length ? (
            <div className="commodity-search-wrapper">
                <Select defaultValue={initSSData[0].value} style={{ width: 160, marginRight: 20 }} onChange={this.handleSelectChange}>
                    {initSSData.map(item=>(
                        <Option value={item.value} key={item.key}>{item.text}</Option>
                    ))}
                    
                    {/* <Option value="productName">按商品名称查询</Option> */}
                </Select>
                <Input placeholder="关键词"
                    style={{ width: 200, marginRight: 20 }}
                    value={this.state.kwd}
                    onChange={this.handleInputChange} />
                <Button type="primary" onClick={this.handleClick}>搜索</Button>
            </div>
        ) : null;
    }
}

export default SelectSearch;