<template>
  <div class="main-content">
      <TopAsideBar/>
      <Container/>
  </div>
</template>

<script>
import TopAsideBar from './top-asidebar.vue'
import Container from './container.vue'
export default {
    components:{
        TopAsideBar,//顶部
        Container,//内容
    }
}
</script>

<style lang="scss" scoped>
  .main-content{
      flex: 1;
  }

</style>