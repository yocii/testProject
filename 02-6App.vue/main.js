
// 引入 Vue 和 Element UI
import Vue from 'vue'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'; // 引入路由配置
// 引入根组件 App
import App from './App.vue';

// 使用 Element UI 插件

Vue.use(ElementUI);




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


