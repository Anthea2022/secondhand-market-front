<template>
    <div class="login-wrap">
        <div class="ms-title">大学生二手市场平台</div>
        <div class="ms-login">
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            type="password"
                            placeholder="密码"
                            v-model="ruleForm.password"
                            @keyup.enter.native="submitForm('ruleForm')"
                    ></el-input>
                </el-form-item>
                <div>
                    <el-button type="primary" @click="submitForm" style="margin-left: 20px">登录</el-button>
                    <el-button type="primary" @click="register" style="margin-left: 120px">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from '@/api/index'
    import Vue from 'vue'
    export default {
        name:  "Login",
        data: function () {
            return {
                ruleForm: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
                },
            }
        },
        methods: {
            submitForm () {
                login(this.ruleForm.name, this.ruleForm.password)
                .then(response => {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    })
                    Vue.prototype.$userId = response.data.data.id
                    this.$router.push('/Info', ()=>{}, ()=>{})
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '登录失败'
                    })
                })
            },
            register() { // 跳转到注册界面
                this.$router.push('/Register', ()=>{}, ()=>{})
            }
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .ms-title {
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -230px;
        margin-right: -200px;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        color: #fff;
    }
    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        height: 160px;
        margin-left: -150px;
        margin-top: -150px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }
</style>
