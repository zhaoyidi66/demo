<template>
  <div class="layout">
      <SidebarNav/>
      <MainContent/>
    
  </div>
</template>

<script>
import SidebarNav from './sidebar-nav/sidebar.vue'
import MainContent from './main-content/heyiqi.vue'
export default {
    components:{
        SidebarNav,//左侧导航组件
        MainContent,//右侧区域组件
    }
}
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        height: 100%;
    }
</style>