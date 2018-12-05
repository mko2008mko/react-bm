import React from "react";

import { Table, Button, Divider,Spin } from "antd";
import { connect } from "react-redux";
import PageTitle from "../../components/page-title/";
import { getCategroyData } from "../category/store/category.redux";
import { Link } from "react-router-dom";

import "./style.less"

const Column = Table.Column;
@connect(
    state => state.categroyReducer,
    { getCategroyData }
)
class Category extends React.Component {

    constructor(props) {
        super();

        this.state = {
            parentCategoryId: props.match.params.categoryId || 0
        }
    }

    componentDidMount() {
        this.props.getCategroyData(this.state.parentCategoryId);
    }

    render() {

        const { categoryList } = this.props;

        return (
            <div>

               
                <PageTitle title="分类列表" />
                <Link to={`/category/add`}>
                <Button className="category-add-btn" type="primary">+添加商品</Button>
                </Link>
                <div className="category-parent-id">
                    <p>父品类ID: {this.state.parentCategoryId}</p>
                </div>
                {/* <Spin spinning={!categoryList.length} delay={500}> */}
                <Table className="category-table" dataSource={categoryList} pagination={false} >

                    <Column
                        title="品类ID"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="品类名称"
                        dataIndex="name"
                        key="name"
                    />

                    <Column
                        title="操作"
                        key="createTime"
                        render={() => (
                            <span>
                                <a href="#:;">修改名称</a>
                                <Divider type="vertical" />
                                <a href="#:;">查看子类</a>
                            </span>
                        )}
                    />



                </Table>
                {/* </Spin> */}
            </div>
        );
    }
}

export default Category;