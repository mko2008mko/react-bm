import axios from "axios";
import qs from "qs";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const USER_LOGOUT = "USER_LOGOUT";

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
        case USER_LOGOUT:
            // console.log("-----------");
            return initState;
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

const logOutSuccess = () => {
    return {
        type: USER_LOGOUT
    }
}

export const userLogOut = () => {
    return dispatch => {
        axios.post('/user/logout.do')
            .then(res => {
                // console.log(res);
                dispatch(logOutSuccess());
            })
            .catch((e) => {
                console.log(e);
            })
    }
}