import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/Login';
import Register from '../components/Register';
import Info from "../components/Info";
import Home from '../components/Home'
import Sell from  '../components/Sell'
import Mine from '../components/Mine.vue'
import sellRecord from "@/components/SellRecord.vue";
import buyRecord from "@/components/BuyRecord.vue";

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/Home',
            name: '首页',
            component: Home,
            children: [{
                path: '/Info',
                name: '商城',
                component: Info
            },
            {
                path: '/Sell',
                name: '售卖记录',
                component: Sell
            },
                {
                    path: '/Mine',
                    name: '个人中心',
                    component: Mine
                },
                {
                    path: "/SellRecord",
                    name: '售卖记录',
                    component: sellRecord
                },
                {
                    path: "/BuyRecord",
                    name: '购买记录',
                    component: buyRecord
                }
            ]
        },
    ]
})
