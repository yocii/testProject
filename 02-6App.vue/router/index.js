// 引入根组件 App
import Vue from 'vue';
//引入组件
import VueRouter from 'vue-router';
import Find from '@/views/Find.vue';
import My from '@/views/My.vue';
import Friend from '@/views/Friend.vue';


// 使用 Vue Router 插件
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
      {path: '/find', component: Find},
      {path: '/my', component: My},
      {path: '/friend', component: Friend},
    
    ],
    linkActiveClass: 'active', // 设置激活链接的类名 模糊匹配
    linkExactActiveClass: 'exact-active', // 设置精确激活链接的类名
    
});
export default router;
