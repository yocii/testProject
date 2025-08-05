// 引入 Vue 和 Element UI
import Vue from 'vue'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入根组件 App
import App from './App.vue';
//引入组件
import VueRouter from 'vue-router';
// 使用 Vue Router 插件
Vue.use(VueRouter);
// 使用 Element UI 插件

Vue.use(ElementUI);
const router = new VueRouter()



// Vue.directive('focus',{
//  inserted(el){
//   console.log('指令被调用了',el);
//   el.focus();
//  }
// })
// 创建并挂载 Vue 实例
new Vue({
  render: h => h(App),
  router, // 注册路由
}).$mount('#app');


