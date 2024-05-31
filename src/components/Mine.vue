<template>
  <div>
    <div style="margin-left: 550px;margin-top: 150px">
      <el-form :model="userInfo" :rules="rules" ref="ruleForm" label-width="100px" style="margin-top: 20px;font-size: 30px">
        <el-form-item label=用户名 prop="name">
          <el-input v-model="userInfo.name" clearable style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="refer">
          <el-input v-model="userInfo.stuId" clearable style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="price">
          <el-input v-model="userInfo.gender" clearable style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="号码" prop="num">
          <el-input v-model="userInfo.phone" clearable style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" clearable style="width: 300px"></el-input>
          <el-button type="primary" @click="changePassword" style="margin-left: 100px">修改密码</el-button>
        </el-form-item>
        <el-form-item label="余额">
          <el-input v-model="userInfo.balance" clearable style="width: 300px"></el-input>
          <el-button type="primary" @click="save" style="margin-left: 100px">充值</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import {getMyInfo, recharge, setPassword} from "@/api";

export default {
  name: "Mine",
  data: function () {
    return {
      labels : [
        '用户', '密码', '余额'
      ],
      userInfo : [
      ],
      money : '',
      password : ''
    }
  },
  created() {
    var userId = this.$userId
    getMyInfo(userId)
        .then(response =>{
          this.userInfo = response.data.data
          this.userInfo.password = ''
        }).catch(error =>{
      this.$message({
        type: 'error',
        message: '获取失败'
      })
    })
  },
  methods:  {
    save() {
      var userId = this.$userId
      recharge(userId, this.userInfo.balance)
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
      setPassword(userId, this.userInfo.password)
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
  // methods: {
  //   save() {
  //     var userId = this.$userId
  //     recharge(userId, this.money)
  //         .then(request => {
  //           this.$message({
  //             type: 'success',
  //             message: '充值成功'
  //           })
  //         })
  //         .catch(error => {
  //           this.$message({
  //             type: 'error',
  //             message: '充值失败'
  //           })
  //         })
  //   },
  //   changePassword() {
  //     var userId = this.$userId
  //     setPassword(userId, this.password)
  //         .then(request => {
  //           this.$message({
  //             type: 'success',
  //             message: '重置成功'
  //           })
  //         }).catch(error =>{
  //       this.$message({
  //         type: 'error',
  //         message: '充值失败'
  //       })
  //     })
  //   }
  // }
}
</script>

<style scoped>

</style>
