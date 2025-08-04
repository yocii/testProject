import Vue from 'vue'
import App from './App.vue'
//编写导入的代码，往代码的顶部编写（规范）
import HmButton from './components/HmButton.vue'
Vue.config.productionTip = false
Vue.component('HmButton', HmButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
