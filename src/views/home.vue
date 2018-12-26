<template>
  <div>
    <top-nav></top-nav>
    <el-container class="container">
      <el-col :span="4" class='side-container'>
        <side-menu></side-menu>
      </el-col>
      <el-col :span="20">
        <el-main class="main-container">
          <el-col :span="24" class="main-header">
            <main-header></main-header>
          </el-col>
          <el-col :span="24" class="main-content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </el-main>
      </el-col>
    </el-container>
  </div>
</template>
<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import SideMenu from '@/components/layout/SideMenu.vue'
  import MainHeader from '@/components/layout/MainHeader'
  import TopNav from '@/components/layout/TopNav'

  export default {
    name: 'Home',
    directives: {},
    data () {
      return {
      }
    },
    components: {
      TopNav,
      MainHeader,
      HelloWorld,
      SideMenu
    },
    created: function () {
      console.log(this.$router, 'created $router')
    },
    mounted () {
      console.log(this.$route, 'mounted $route')
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleopen () {
        // console.log('handleopen')
      },
      handleclose () {
        // console.log('handleclose')
      },
      handleselect: function (a, b) {
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    min-height: 750px;
    .side-container {
      background: #545c64;
    }
    .main-container {
      background-color: #fff;
      height: 100%;
      .main-content {
        box-sizing: border-box;
      }
    }
  }
</style>
