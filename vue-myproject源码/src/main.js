import Vue from 'vue' // 导入Vue 模块 
import App from './App.vue'   // 根组件
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// Vue 核心文件  启动项目


//1. 淘宝适配必须引入的  引入js文件 
import "lib-flexible";

//引入全局的css样式
import "@/styles/index.scss"

//下载库后再下载插件s
import "@/utils/vant";   //按需加载 --- 性能优化
// 下载库后引入Vant (一次性导入)
// import Vant from "vant"
// import 'vant/lib/index.css';  // 一次性导入所有的样式 
// Vue.use(Vant)

//全局注册的组件
import "@/utils/global"

//axios导入
import { axios } from "@/utils/axios"
Vue.prototype.$axios = axios   //绑定到了Vue的原型下面   可以通过this.$axios 指向 axios  




new Vue({
  router,  // 挂载路由 this.$router 
  store,    //通过this.$store 来获取store对象
  render: h => h(App)// render Vue渲染虚拟DOM 的函数 
}).$mount('#app')// 把虚拟DOM App 载入到 div#app 里面去 


// h=>h(App)
// (h)=> {return h(App)}
// function(h){
//   return h(App)
// }