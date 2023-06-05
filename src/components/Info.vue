<template>
    <div>
        <div>
            <el-button @click="listGoods" style="margin-left: 700px; margin-top: 50px">获取货物</el-button>
        </div>
        <div style="margin-left: 450px; margin-right: 450px;margin-top: 50px">
            <el-row :gutter="20" >
                <el-col :span="7">
                    <el-input placeholder="请输入内容" clearable style="width: 625px" v-model="goodsName">
                        <el-button slot="append" icon="el-icon-search" @click="selection(goodsName)"></el-button>
                    </el-input>
                </el-col>
            </el-row>
            <el-table :data="goodsList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="商品名称" prop="name" width="150px"></el-table-column>
                <el-table-column label="商品描述" prop="refer" width="200px"></el-table-column>
                <el-table-column label="商品价格（元）" prop="price" width="150px"></el-table-column>
                <el-table-column label="操作" width="100px">
                    <template slot-scope="scope">
                        <el-button size= "mini" type="primary" icon="el-icon-edit" @click="buy(scope.row.id)">购买</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="margin-top: 50px">
            <div align="left" style="float:left">
                <el-button @click="goToMine" style="margin-left: 550px;width: 100px">我的</el-button>
            </div>
            <div align="right">
                <el-button @click="goToSell" style="margin-right: 550px;width: 100px">出售</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getGoods, buyGoods, getLikeName} from '@/api/index'
    export default {
        name: "Info",
        data: function () {
            return {
                goodsList:[],
                goodsName: ''
            }
        },
        methods: {
            listGoods() {
                getGoods()
                .then(response => {
                    console.log(response)
                    this.goodsList = response.data.data
                }).catch(error =>{
                    this.$message({
                        type: 'error',
                        message: '获取失败'
                    })
                })
            },
            buy(id) {
                console.log(id)
                var userId = parseInt(this.$userId);
                buyGoods(userId, id)
                .then(response =>{
                    this.$message({
                        type: 'success',
                        message: '购买成功'
                    })
                }).catch(error => {
                    this.$message({
                        type: 'error',
                        message: '购买失败'
                    })
                })
            },
            selection(goodsName) {
                getLikeName(goodsName)
                .then(response =>{
                    this.goodsList = response.data.data
                }).catch(error =>{
                    this.$message({
                        type: 'error',
                        message: '获取失败'
                    })
                })
            },
            goToMine() {
                this.$router.push('/Home', ()=>{}, ()=>{})
            },
            goToSell() {
                this.$router.push('/Sell', ()=>{}, ()=>{})
            }
        }
    }
</script>

<style scoped>
#box ul{
    display: flex;
    flex-wrap: wrap;
}
#box li{
    padding: 3px;
    list-style: none;
    margin-right: 15px;
    border: 1px solid #eee;
}
#box img{
    width: 200px;
    height: 150px;
}
</style>
