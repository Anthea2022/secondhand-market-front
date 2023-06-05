<template>
    <div>
        <div class="zhuce">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="margin-top: 20px">
                <el-form-item label="商品名" prop="name">
                    <el-input v-model="ruleForm.name" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="refer">
                    <el-input v-model="ruleForm.refer" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="ruleForm.price" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="num">
                    <el-input v-model="ruleForm.num" clearable style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" style="margin-left: 100px">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {sell} from '@/api/index'
    import Vue from "vue";
    export default {
        name: "sell",
        data: function () {
            return {
                ruleForm:{
                    name: '',
                    refer: '',
                    price: '',
                    num: '',
                },
                rules: {
                    name: [{ required: true, message: '请输入商品名', trigger: 'blur' }],
                    price: [{required: true, message: '请输入价格', trigger: 'blur'}],
                    num: [{ required: true, message: '请输入数量', trigger: 'blur' }]
                }
            }
        },
        methods: {
            submitForm() {
                var userId = parseInt(this.$userId)
                sell(this.ruleForm.name, userId, this.ruleForm.refer, this.ruleForm.price, this.ruleForm.num)
                    .then(response => {
                        this.$message({
                            type: 'success',
                            message: '上传成功'
                        })
                    }).catch(err => {
                        this.$message({
                            type: 'error',
                            message: '上传失败'
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

