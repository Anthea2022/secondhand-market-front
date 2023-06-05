const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port: 8081,
    proxy:{
      '/api':{//表示拦截以/api开头的请求路径
        target:'http://localhost:8080',
        changOrigin: true,//是否开启跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
