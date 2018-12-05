import React from "react";
import { connect } from "react-redux";
import { Row, Input, Select, InputNumber, Button, message } from "antd";
import { getCommodityDetail } from "./store/commodity.redux";
import PageTitle from "../../components/page-title";

const Option = Select.Option;

@connect(
    state => state.commodityReducer,
    { getCommodityDetail }
)
class CommodityDetail extends React.Component {

    componentDidMount() {
        const productId = this.props.match.params.productId
        // console.log(this.props.match.params.productId);
        this.props.getCommodityDetail(productId || 0);
    }

    render() {

        const { productDetail } = this.props
        // console.log(productDetail.subImages)
        // console.log(productDetail)
        return productDetail?(
            <div>
                <PageTitle title="商品详情" />
                <div className="commodity-add-container">
                    <Row>
                        <span>商品名称</span>
                        <Input placeholder="请输入商品名称" style={{ width: 320 }}
                        value={productDetail.name}
                          disabled={true} 
                        />
                    </Row>
                    <Row>
                        <span>商品描述</span>
                        <Input placeholder="请输入商品描述" style={{ width: 320 }}
                         value={productDetail.subtitle}
                          disabled={true}
                        />
                    </Row>
                    <Row>
                        <span>所属分类</span>
                       
                        <Select
                            
                            defaultValue={productDetail.parentCategoryId}
                            style={{ width: 320 }}
                        >
                           <Option value={productDetail.parentCategoryId} >{productDetail.parentCategoryId}</Option>
                        </Select>
                       
                            <Select
                                
                                defaultValue={productDetail.categoryId}
                                style={{ width: 320 }}
                            >
                              <Option value={productDetail.categoryId} >{productDetail.categoryId}</Option>
                            </Select>
                            

                    </Row>

                    <Row>
                        <span>商品价格</span>
                        <InputNumber min={1} max={100} defaultValue={1} placeholder="价格"
                        value={productDetail.price}
                            disabled={true}
                        />
                    </Row>
                    <Row>
                        <span>商品库存</span>
                        <InputNumber min={1} max={100} defaultValue={1} placeholder="库存"
                         value={productDetail.stock}
                            disabled={true}
                        />
                    </Row>
                    <Row>
                    {
                       
                                productDetail.subImages.length ? productDetail.subImages.map(
                                    (image, index) => (
                                    <div  key={index}>
                                        <img  src={image.url} alt=""/>
                                    </div>)
                                ) : (<div>暂无图片</div>)
                            }
                    </Row>
                    <Row>
                        <div dangerouslySetInnerHTML={{__html:productDetail.detail}}></div>
                    </Row>
                </div>
            </div>
        ):null;
    }
}

export default CommodityDetail;