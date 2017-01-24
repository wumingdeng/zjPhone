// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import store from './store/store';
import Framework7Vue from './framework7-vue.js';
Vue.use(Framework7Vue);

import { Swipe, SwipeItem } from 'mint-ui';
import { Cell } from 'mint-ui';

import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'mint-ui/lib/Swipe/style.css';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);

Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes,
});


// 创建一个 store 对象用于管理应用状态
// const store = new Vuex.Store(storeOption);

window.__lendApp__ = new Vue({
  el: '#app',
  framework7: {
      root: '#app', //Should be same as app el
      animateNavBackIcon: true
    },
  router,	//创建和挂载根实例。  记得要通过 router 配置参数注入路由，  从而让整个应用都有路由功能
  store,	//通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
  render: h => h(App)
});