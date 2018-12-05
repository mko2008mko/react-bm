import axios from "axios";
import qs from "qs";
import { message } from "antd"


const GET_CATEGORY_DATA = "GET_CATEGORY_DATA";
const PUT_CATEGORYNAME = "PUT_CATEGORYNAME";

const initState = {
    categoryList: []
}

export const categroyReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORY_DATA:

            return { ...state, categoryList: action.data };

        default:
            return state;
    }
}

const getCDSuccess = (data) => {
    return {
        type: GET_CATEGORY_DATA,
        data: data
    }
}

export const getCategroyData = (categoryId) => {
    return dispatch => {
        axios.post('/manage/category/get_category.do', qs.stringify({ categoryId }))
            .then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    dispatch(getCDSuccess(res.data.data));
                } else {
                    // console.log(res.data.msg);
                    message.error(res.data.msg);
                }
            })
            .catch((e) => {
                message.error('网络异常');
                // console.log(e);
            })
    }
}

export const putCategoryName = (obj) =>{
    return dsipatch=>{
        axios.post('/manage/category/add_category.do', qs.stringify(obj))
            .then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    // dispatch(getCDSuccess(res.data.data));
                    message.info(res.data.data);
                } else {
                    // console.log(res.data.msg);
                    message.error(res.data.msg);
                }
            })
            .catch((e) => {
                message.error('网络异常');
                // console.log(e);
            })
    }
}