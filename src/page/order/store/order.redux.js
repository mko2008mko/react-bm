import axios from "axios";
import qs from "qs"
import { message } from "antd";

const GET_ORDER_DATA = "GET_ORDER_DATA";
const GET_ORDER_DATA_FAIL = "GET_ORDER_DATA_FAIL";


const initState = {
    orderList: [],
    total: 0,
    msg: ''
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ORDER_DATA:
            return { ...state, orderList: action.data, total: action.total, msg: '' };
        case GET_ORDER_DATA_FAIL:
            return { ...state, msg: action.msg }
        default:
            return state;
    }
}

const getODSuccess = (data, total) => {
    return {
        type: GET_ORDER_DATA,
        data: data,
        total: total
    }
}

const getODFail = (msg) => {
    return {
        type: GET_ORDER_DATA_FAIL,
        mgs: msg
    }
}


export const getOData = (pageNum) => {
    return dispatch => {
        axios.post('/manage/order/list.do', qs.stringify({ pageNum }))
            .then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    dispatch(getODSuccess(res.data.data.list, res.data.data.total));
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

export const searchOData = (pageNum, stype, kwd) => {
    return dispatch => {
        axios.post('/manage/order/search.do', qs.stringify({ pageNum, [stype]: kwd }))
            .then(res => {
                // console.log(res);
                if (res.data.status === 0) {
                    dispatch(getODSuccess(res.data.data.list, res.data.data.total));
                } else {
                    // dispatch(getODFail(res.data.msg))
                    // console.log(res.data.msg);
                    message.error(res.data.msg)
                    // dispatch(loginFail(res.data.msg));
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

//productName productId