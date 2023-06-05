import request from '@/api/http'

export function login(name,password){
    return request({
        url: `/secondhand_market/user/login?name=${name}&password=${password}`,
        method: 'post'
    })
}

export function register(ruleForm) {
    return request({
        url: `/secondhand_market/user/register`,
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        withCredentials:true,
        data: ruleForm
    })
}

export function getGoods() {
    return request({
        url: `/secondhand_market/goods/listGoods`,
        method: 'get',
    })
}

export function buyGoods(userId, goodsId) {
    return request({
        url: `/secondhand_market/user/buy?userId=${userId}&goodsId=${goodsId}&num=1`,
        method: 'post',
    })
}

export function getMyGoods(userId) {
    return request({
        url: `/secondhand_market/goods/getUserGoods?userId=${userId}`,
        method: 'get',
    })
}

export function getLikeName(name) {
    return request({
        url: `/secondhand_market/goods/getGoodsLikeName?name=${name}`,
        method: 'get',
    })
}

export function sell(name, userId, refer, price, num) {
    return request({
        url: `/secondhand_market/user/sell?name=${name}&userId=${userId}&refer=${refer}&price=${price}&num=${num}`,
        method: 'post',
    })
}

export function recharge(userId,money) {
    return request({
        url: `/secondhand_market/user/save?userId=${userId}&money=${money}`,
        method: 'post'
    })
}

export function getBalance(userId) {
    return request({
        url: `/secondhand_market/user/getUserData?userId=${userId}`,
        method: 'get'
    })
}

export function setPassword(userId, password) {
    return request({
        url: `/secondhand_market/user/setPassword?id=${userId}&password=${password}`,
        method: 'post'
    })
}

export function getSell(userId) {
    return request({
        url: `/secondhand_market/goods/getUserSell?userId=${userId}`,
        method: 'get'
    })
}

