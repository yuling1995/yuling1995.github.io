// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue.js文件
import Vue from 'vue'

//引进app.vue组件
import App from './App.vue'

// 引入路由
import VueRouter from 'vue-router'

//需要把VueRouter注册到vue里面
Vue.use(VueRouter);

// 把路由文件引进来
import router from './router/index.js'

//引入axios
import axios from 'axios';
//使用原型对象的方式把axios挂载到vue
Vue.prototype.axios = axios;

//引入状态管理
import store from './store/store.js'

Vue.config.productionTip = false

//引进swiper
import vueAwesomeSwiper from 'vue-awesome-swiper';
import 'vue-awesome-swiper/dist/css/swiper.css';
Vue.use(vueAwesomeSwiper);

//配置vux
import { Datetime, Group } from 'vux'  
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
