import axios from "axios";
import qs from "qs";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const CLEAR_DATA = "CLEAR_DATA";

const initState = {
    userInfo: null,
    msg: "",
    requestFlag: 0
}
export const loginRducer = (state = initState, action) => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.data, requestFlag: state.requestFlag + 1 };
        case USER_LOGIN_FAIL:
            return { ...state, msg: action.msg, requestFlag: state.requestFlag + 1 };
        default:
            return state;
    }

}

const loginSuccess = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        data: data
    }
}

const loginFail = (msg) => {
    return {
        type: USER_LOGIN_FAIL,
        msg: msg
    }
}

export const clearData = () => {
    return {
        tyep: CLEAR_DATA
    }
}

export const userLogin = (username, password) => {
    return dispatch => {
        axios.post('/manage/user/login.do', qs.stringify({ username, password }))
            .then(res => {
                // console.log(res);
                if (res.data.status === 0) {
                    dispatch(loginSuccess(res.data.data));
                } else {
                    dispatch(loginFail(res.data.msg));
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }
}