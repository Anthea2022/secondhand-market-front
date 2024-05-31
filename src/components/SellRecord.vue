<template>
  <div style="margin-top: 100px">
    <div style="margin-left: 390px; margin-right: 390px">
      <el-table :data="sellList" border stripe style="font-size: 20px">
        <el-table-column label="商品名称" prop="name" width="250px"></el-table-column>
        <el-table-column label="商品描述" prop="refer" width="600px"></el-table-column>
        <el-table-column label="商品数量" prop="num" width="150px"></el-table-column>
        <el-table-column label="商品价格（元）" prop="price" width="250px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getSell} from "@/api";

export default {
  name: "SellRecord",
  data: function () {
    return {
      sellList: []
    }
  },
  created() {
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
}
</script>

<style scoped>

</style>
