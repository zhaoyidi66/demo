import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Layout from '../views/Layout/layout.vue'
import Login from '../views/Login/login.vue'
import Error from '../views/Error/404.vue'

Vue.use(VueRouter)

//基础路由
 export const baseRoutes=[
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta:{//配置meta元信息 配置父元素
      isLogin:true,
    },
    children:[ {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {//标识匹配
        name: '首页',
        icon: "icon-home",
      }
    },

  ]
  },
  {
    path:'*',
    name:'Error',
    component:Error
  }

]

//路由
export const routes = [
   {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  routes
})



export default router
