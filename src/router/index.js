import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/Login';
import Register from '../components/Register';
import Info from "../components/Info";
import Home from '../components/Home'
import Sell from  '../components/Sell'

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
            path: '/Info',
            name: 'Info',
            component: Info
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Sell',
            name: 'Sell',
            component: Sell
        }
    ]
})
