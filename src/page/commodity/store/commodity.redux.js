import axios from "axios";
import qs from "qs";
import { message } from "antd";

const GET_COMMODITY_DATA = "GET_COMMODITY_DATA";
const PUT_COMMODITY_DATA = "PUT_COMMODITY_DATA";
const CLEAR_COMMODITY_FLAG = "CLEAR_COMMODITY_FLAG";
const COMMODITY_ACTIVE = "COMMODITY_ACTIVE";
const COMMODITY_DETAIL = "COMMODITY_DETAIL";


const initState = {
    commodityList: [],
    total: 0,
    putFlag: false,
    activeFlag: 0,
    productDetail: null
}

export const commodityReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMMODITY_DATA:
            return { ...state, commodityList: action.data, total: action.total };
        case PUT_COMMODITY_DATA:
            return { ...state, putFlag: true };
        case CLEAR_COMMODITY_FLAG:
            return { ...state, putFlag: false };
        case COMMODITY_ACTIVE:
            return { ...state, activeFlag: state.activeFlag + 1 };
        case COMMODITY_DETAIL:
            return { ...state, productDetail: action.data};
        default:
            return state;
    }
}

const getCDSuccess = (data, total) => {
    return {
        type: GET_COMMODITY_DATA,
        data: data,
        total: total
    }
}


export const getCData = (pageNum) => {
    return dispatch => {
        axios.post('/manage/product/list.do', qs.stringify({ pageNum }))
            .then(res => {
                // console.log('getCData');
                if (res.data.status === 0) {
                    dispatch(getCDSuccess(res.data.data.list, res.data.data.total));
                } else {
                    console.log(res.data.msg);
                    // dispatch(loginFail(res.data.msg));
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const searchCData = (pageNum, stype, kwd) => {
    return dispatch => {
        axios.post('/manage/product/search.do', qs.stringify({ pageNum, [stype]: kwd }))
            .then(res => {
                // console.log(res);
                if (res.data.status === 0) {
                    dispatch(getCDSuccess(res.data.data.list, res.data.data.total));
                } else {
                    console.log(res.data.msg);
                    // dispatch(loginFail(res.data.msg));
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

//productName productId
const putCommoditySuccess = () => {
    return {
        type: PUT_COMMODITY_DATA
    }
}

export const putCommodityData = (obj) => {
    return dispatch => {
        setTimeout(() => {
            console.log(obj);
            message.info("商品上传成功");
            dispatch(putCommoditySuccess());
        }, 1000);
    }
}

export const clearFlag = () => {
    return {
        type: CLEAR_COMMODITY_FLAG
    }
}

const activeSuccess = () => {
    return {
        type: COMMODITY_ACTIVE
    }
}

export const activeCommodity = (productId, status) => {
    return dispatch => {
        axios.post('/manage/product/set_sale_status.do', qs.stringify({ productId, status }))
            .then(res => {
                if (res.data.status === 0) {
                    message.info(res.data.data);
                    dispatch(activeSuccess());
                } else {
                    message.error(res.data.data);
                }

            })
            .catch(e => {
                message.error('网络异常');
            })
    }
}

const getCDDSuccess = (data) => {
    return {
        type: COMMODITY_DETAIL,
        data: {
            ...data, subImages: data.subImages.split(',').map(imgUri => ({
                uri: imgUri,
                url: data.imageHost + imgUri
            }))
        }
        // data: data=>{
        //     console.log(data);
        //     // let images = data.subImages.split(',');
        //     // data.subImages = images.map((imgUri) => {
        //     //     return {
        //     //         uri: imgUri,
        //     //         url: data.imageHost + imgUri
        //     //     }
        //     // });
        //     // console.log('---',data);
        //     return data;
        // }
    }
}

export const getCommodityDetail = (productId) => {
    return dispatch => {
        axios.post('/manage/product/detail.do', qs.stringify({ productId }))
            .then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    dispatch(getCDDSuccess(res.data.data));
                } else {
                    console.log(res.data.msg);
                    // dispatch(loginFail(res.data.msg));
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }
}