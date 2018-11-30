import axios from "axios";
import qs from "qs"

const GET_COMMODITY_DATA = "GET_COMMODITY_DATA";
const SEARCH_COMMODITY_DATA = "SEARCH_COMMODITY_DATA";


const initState = {
    commodityList: [],
    total: 0
}

export const commodityReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMMODITY_DATA:
            return { ...state, commodityList: action.data, total: action.total };

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

export const searchCData = (pageNum, stype, kwd) => {
    return dispatch => {
        axios.post('/manage/product/search.do', qs.stringify({ pageNum, [stype]: kwd }))
            .then(res => {
                console.log(res);
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