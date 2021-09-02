<template>
  <div class="sidebar-nav">
    <el-menu
      default-active="$route.name"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <Mymenu :menuList='DynamicRoutes'/>
    </el-menu>
      
  </div>
</template>

<script>
import  Mymenu from '../../../components/Mymenu.vue'
// import {DynamicRoutes} from '../../../router'//前台定制的全路由配置
import {mapState} from 'vuex' //vuex存储的动态路由
import {baseRoutes} from '../../../router'
export default {
   data(){
     return{
       DynamicRoutes:baseRoutes[0].children
   
     }
   },
   computed:{
     ...mapState('routeModule',['menuList'])
   },
    components:{
      Mymenu
    },
 
}
</script>

<style lang="scss" scoped>
  .sidebar-nav{
      background:#545c64 ;
      height: 100%;
      width: 200px;
  }

</style>