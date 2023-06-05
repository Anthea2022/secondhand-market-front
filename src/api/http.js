/*拦截器*/
import axios from 'axios'
import Vue from 'vue'

import {
    Message,
    LoadingBar
} from 'view-design'

Vue.prototype.HOST = '/api'
// Vue.prototype.$http = axios
Vue.prototype.$axios = axios
axios.defaults.baseURL = "/api";//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息

// 超时时间
axios.defaults.timeout = 12000
// http请求拦截器
axios.interceptors.request.use(config => {
    LoadingBar.start();
    return config
}, error => {
    LoadingBar.error();
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    LoadingBar.finish();
    return data
}, error => {
    LoadingBar.error();
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})

export default axios
