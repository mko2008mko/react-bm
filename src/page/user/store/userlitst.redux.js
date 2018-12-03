import axios from "axios";
import qs from "qs";
import { message } from "antd";
import { fmtData }from "../../../utils";

const GET_USERLIST = "GET_USERLIST";

const initState = {
    userList: [],
    total: 0,
    msg: ''
}

export const userListReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERLIST:

            return {...state,userList:action.data,total:action.total};

        default:
            return state;
    }
}


const getULSucess = (data, total) => {
    // console.log(data,total);
    return {
        type: GET_USERLIST,
        data: data.map(item=>{
            return {...item,createTime:fmtData(item.createTime)}
        }),
        // data:data,
        total: total
    }
}

export const getULData = (pageNum) => {
    return dispatch=>{
        axios.post('/manage/user/list.do',qs.stringify({pageNum}))
        .then(res => {
            // console.log(res);
            if (res.data.status === 0) {
                dispatch(getULSucess(res.data.data.list, res.data.data.total));
            } else {
                console.log(res.data.msg);
                message.error(res.data.msg)
                
            }
        })
        .catch((e) => {
            message.error('网络异常');
            console.log(e);
        })
    }
}