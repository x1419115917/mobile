export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '美悦汇',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    // dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    dev: 'http://120.79.191.75:9203/',
    // dev: 'http://192.168.1.13:9203/',
    pro: 'http://120.79.191.75:9203/'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home'
}
