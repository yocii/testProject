import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  mode: 'history', // 使用HTML5 History模式
  routes: [
    {path: '/', redirect: '/home'}, // 重定向到 /home
    { path: '/home', component: Home },
    // { path: '/search', component: Search }
    { name:'search',path: '/search/:words?', component: Search },
    { path: '*', component:NotFound }


  ]
})

export default router