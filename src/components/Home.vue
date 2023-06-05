<template>
    <div>
        <div>
            <el-button @click="listMyGoods" style="margin-left: 700px; margin-top: 25px">我的购物</el-button>
        </div>
        <div style="margin-left: 490px; margin-right: 490px">
            <el-table :data="goodsList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="商品名称" prop="name" width="150px"></el-table-column>
                <el-table-column label="商品描述" prop="refer" width="200px"></el-table-column>
                <el-table-column label="商品价格（元）" prop="price" width="150px"></el-table-column>
            </el-table>
        </div>
        <div>
            <el-button @click="listMySell" style="margin-left: 700px; margin-top: 25px">我的出售</el-button>
        </div>
        <div style="margin-left: 490px; margin-right: 490px">
            <el-table :data="sellList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="商品名称" prop="name" width="150px"></el-table-column>
                <el-table-column label="商品描述" prop="refer" width="200px"></el-table-column>
                <el-table-column label="商品价格（元）" prop="price" width="150px"></el-table-column>
            </el-table>
        </div>
        <div style="margin-top: 50px; margin-left: 700px">
            我的余额： {{balance}}
        </div>
        <div style="margin-top: 50px">
            <div align="left" style="float:left">
                <el-input v-model="money" clearable style="margin-left: 630px;width: 150px"></el-input>
            </div>
            <div align="right">
                <el-button @click="save" type="primary" style="margin-right: 630px;width: 100px">充值</el-button>
            </div>
        </div>
        <div style="margin-top: 50px">
            <div align="left" style="float:left">
                <el-input v-model="password" clearable style="margin-left: 630px;width: 150px"></el-input>
            </div>
            <div align="right">
                <el-button @click="changePassword" type="primary" style="margin-right: 630px;width: 100px">修改密码</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMyGoods, recharge, getBalance, setPassword, getSell} from "@/api/index";

    export default {
        name: "Home",
        data: function () {
            return {
                goodsList:[],
                money: '',
                balance: '',
                password: '',
                sellList: []
            }
        },
        created() {
            var userId = this.$userId
            getBalance(userId)
            .then(request => {
                this.balance = request.data.data.balance
            }).catch(error => {
                this.$message({
                    type: 'error',
                    message: '获取失败'
                })
            })
        },
        methods:{
            listMyGoods() {
                var userId = parseInt(this.$userId)
                getMyGoods(userId)
                .then(response =>{
                    this.goodsList = response.data.data
                }).catch(error =>{
                    this.$message({
                        type: 'error',
                        message: '获取失败'
                    })
                })
            },
            save() {
                var userId = this.$userId
                recharge(userId, this.money)
                .then(request => {
                    this.$message({
                        type: 'success',
                        message: '充值成功'
                    })
                })
                .catch(error => {
                    this.$message({
                        type: 'error',
                        message: '充值失败'
                    })
                })
            },
            listMySell() {
                var userId = this.$userId
                getSell(userId)
                .then(res => {
                    this.sellList = res.data.data
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '获取失败'
                    })
                })
            },
            changePassword() {
                var userId = this.$userId
                setPassword(userId, this.password)
                .then(request => {
                    this.$message({
                        type: 'success',
                        message: '重置成功'
                    })
                }).catch(error =>{
                    this.$message({
                        type: 'error',
                        message: '充值失败'
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
