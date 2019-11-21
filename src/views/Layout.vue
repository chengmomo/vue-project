<template>
  <div class="app-container">
    <!--头部导航-->
    <top-nav class="top-container"></top-nav>
    <!--侧边导航-->
    <side-menu class="side-container" v-if="refreshMenu" :isCollapse="isCollapse" @on-toggle="onToggle"></side-menu>
    <el-row class="main-container" :style="{'left': isCollapse?'65px':'200px'}">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-row>
  </div>
</template>
<script>
  import SideMenu from './layout/SideMenu.vue'
  import MainHeader from './layout/MainHeader'
  import TopNav from './layout/TopNav'

  export default {
    name: 'Layout',
    directives: {},
    data () {
      return {
        isCollapse: true,
        refreshMenu: true
      }
    },
    components: {
      TopNav,
      MainHeader,
      SideMenu
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(to, 'beforeRouteEnter to')
        vm.refreshMenu = false
        vm.$nextTick(function () {
          vm.refreshMenu = true
        })
      })
    },
    mounted () {
      // console.log(this.$route, 'mounted $route')
    },
    methods: {
      handleSelect (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleopen () {
        // console.log('handleopen')
      },
      handleclose () {
        // console.log('handleclose')
      },
      handleselect: function (a, b) {
      },
      onToggle (val) {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>
<style scoped lang="scss">
  .main-container {
    padding: 0;
    position: fixed;
    top: 62px;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
  }
</style>
