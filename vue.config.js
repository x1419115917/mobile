const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/variable.scss";
        `
      }
    }
  },
  configureWebpack: config => {
    // 线上环境去掉打印信息
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}
