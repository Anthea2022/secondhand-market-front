<template>
  <div style="margin-top: 100px">
    <div style="margin-left: 390px; margin-right: 390px">
      <el-table :data="buyList" border stripe style="font-size: 20px">
        <el-table-column label="商品名称" prop="name" width="250px"></el-table-column>
        <el-table-column label="商品描述" prop="refer" width="600px"></el-table-column>
        <el-table-column label="商品数量" prop="num" width="150px"></el-table-column>
        <el-table-column label="商品价格（元）" prop="price" width="250px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getMyGoods} from "@/api/index";
export default {
  name: "BuyRecord",
  data: function () {
    return{
      buyList : []
    }
  },
  created() {
    var userId = parseInt(this.$userId)
    getMyGoods(userId)
    .then(response =>{
      this.buyList = response.data.data
    }).catch(error =>{
      this.$message({
        type: 'error',
        message: '获取失败'
      })
    })
  }
}
</script>

<style scoped>

</style>
