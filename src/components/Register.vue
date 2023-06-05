<template>
    <div>
        <div class="zhuce">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="margin-top: 20px">
                <el-form-item label="用户名" prop="user">
                    <el-input v-model="ruleForm.name" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="ruleForm.phone" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-input v-model="ruleForm.gender" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="账号密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="学号" prop="stuId">
                    <el-input v-model="ruleForm.stuId" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" style="margin-left: 100px">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {register} from '@/api/index'
    export default {
        name: "Register",
        data: function () {
            return {
                ruleForm:{
                    name:'',
                    phone:'',
                    gender:'',
                    password:'',
                    stuId:''
                },
                rules: {
                    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    phone: [{required: true, message: '请输入电话号码', trigger: 'blur'}],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
                }
            }
        },
        methods:{
            submitForm() {
                register(this.ruleForm)
                .then(response => {
                    this.$message({
                        type: 'success',
                        message: '注册成功'
                    })
                    this.$router.push('/')
                }).catch(error => {
                    this.$message({
                        type: 'error',
                        message: '注册失败'
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        height: 100%;
        background-color: #2e4e6e;
    }
    .zhuce {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 460px;
        height: 450px;
        background-color: #fff;
        border-radius: 3px;
    }
</style>
