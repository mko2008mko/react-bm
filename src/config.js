import axios from "axios";
// import { Spin } from 'antd';

axios.interceptors.request.use(function (config) {
    // Spin.loading('加载中', 0);
    return config;
});

axios.interceptors.response.use(function (config) {
    // Spin.hide();

    return config;
})