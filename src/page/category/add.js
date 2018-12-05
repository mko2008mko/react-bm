import React from 'react';
import { Select, Row, Input, Button } from "antd";
import PageTitle from "../../components/page-title";
import { connect } from "react-redux";
import { putCategoryName } from "../category/store/category.redux";

const Option = Select.Option;

@connect(
    state => state.categroyReducer,
    { putCategoryName }
)
class Add extends React.Component {

    constructor(props) {
        super();
        this.state = {
            parentId: 0,
            categoryName: ''
        }
    }

    handleSelectChage = (e) => {
        // console.log(e)
        this.setState({
            parentId: e
        })
    }

    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            categoryName: e.target.value
        })
    }

    handleSubmitClick = () => {
        console.log(this.state);
        this.props.putCategoryName(this.state)
    }

    render() {

        const { categoryList } = this.props;
        // console.log(categoryList)


        return categoryList.length ? (
            <div>
                <PageTitle title="添加分类" />
                <div className="category-add-container">
                    <Row>
                        <span>所属品类</span>
                        <Select defaultValue={categoryList[0].id} style={{ width: 320 }} onChange={this.handleSelectChage}>
                            {categoryList.map(item => (
                                <Option value={item.id} key={item.id}>{item.name}</Option>
                            ))}

                        </Select>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <span>品类名称</span>
                        <Input placeholder="输入品类名称" style={{ width: 320 }}
                            onChange={this.handleInputChange}
                            value={this.state.categoryName} />
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <Button style={{ width: 120, marginLeft: 75 }}
                            type="primary"
                            onClick={this.handleSubmitClick}
                        >提交</Button>
                    </Row>
                </div>
            </div>
        ) : null;
    }

}

export default Add;