// 引入 Vue 和 Element UI
import Vue from 'vue'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入根组件 App
import App from './App.vue';

// 使用 Element UI 插件
Vue.use(ElementUI);

// 创建并挂载 Vue 实例
new Vue({
  render: h => h(App),
}).$mount('#app');


