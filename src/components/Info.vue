<template>
    <div>
      <div style="margin-left: 600px; margin-right: 500px;margin-top: 100px">
        <el-row :gutter="20" >
          <el-col :span="7">
            <el-input placeholder="请输入查询内容" clearable style="width: 800px" v-model="goodsName">
              <el-button slot="append" icon="el-icon-search" @click="selection(goodsName)"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
        <div style="margin-left: 400px; margin-right: 400px;margin-top: 50px">
            <el-table :data="goodsList" border stripe style="font-size: 20px">
<!--                <el-table-column type="index"></el-table-column>-->
                <el-table-column label="商品名称" prop="name" width="250px"></el-table-column>
                <el-table-column label="商品描述" prop="refer" width="600px"></el-table-column>
                <el-table-column label="商品数量" prop="num" width="150px"></el-table-column>
                <el-table-column label="商品价格（元）" prop="price" width="250px"></el-table-column>
                <el-table-column label="操作" width="100px">
                    <template slot-scope="scope">
                        <el-button size= "mini" type="primary" icon="el-icon-edit" @click="buy(scope.row.id)">购买</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
      created() {
          this.listGoods();
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
