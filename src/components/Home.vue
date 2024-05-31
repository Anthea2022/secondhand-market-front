<template>
  <div style="margin-top: -20px">
    <el-container style="height: 100vh;
      border: 1px solid #eee;
      margin: 0;
      border: 0;
      padding: 0;">
      <el-aside width="200px">
          <el-menu
              background-color="#2F4F4F" text-color="#ffffff" style="height: 100%"
              default-active="1"
              class="el-menu-vertical-demo"
              unique-opened
              router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span>首页</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/Info">商城</el-menu-item>
                <el-menu-item index="/BuyRecord">购买记录</el-menu-item>
                <el-menu-item index="/SellRecord">售卖记录</el-menu-item>
                <el-menu-item index="/Mine">个人中心</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-col>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-container>
  </div>
</template>

<script>
    import {getGoods, recharge, setPassword, } from "@/api/index";

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
          getGoods()
              .then(response =>{
                this.goodsList = response.data.data
              }).catch(error =>{
            this.$message({
              type: 'error',
              message: '获取失败'
            })
          })
        },
        methods:{
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
.el-container {
  height: 100%
}
.el-aside {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
