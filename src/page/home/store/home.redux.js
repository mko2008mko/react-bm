import axios from "axios";
// import qs from "qs";

const GET_BASE_COUNT = "GET_BASE_COUNT";

const initState = {
    baseCountData: null
}

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_BASE_COUNT:

            return { ...state, baseCountData: action.data };

        default:
            return state;
    }
}

const getBCDataSuccess = (data) => {
    return {
        type: GET_BASE_COUNT,
        data: data
    }
}

export const getBaseCountData = () => {
    return dispatch => {
        axios.get('/manage/statistic/base_count.do')
            .then(res => {
                // console.log(res);
                if (res.data.status === 0) {
                    dispatch(getBCDataSuccess(res.data.data));
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