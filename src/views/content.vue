<template>
  <div class="content-wrap">
    <div class="nav-wrap" v-if="refreshMenu">
      <el-menu class='nav-bar' @select="onClick" mode="vertical"
               :default-active="$route.name">
        <el-menu-item-group title="xxx">
          <el-menu-item v-for="(item,i) in $route.matched[1].meta.menus" :index="item.name" :key="i">
            {{item.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="content-inner" :style="{'left': refreshMenu?'180px':'0'}">
      <main-header></main-header>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
  import Table from './element/table'
  import Tabs from './element/tabs'
  import MainHeader from '@/components/layout/MainHeader'

  export default {
    name: 'content',
    components: {MainHeader, Tabs, Table},
    data() {
      return {
        isCollapse: false,
        refreshMenu: true
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.refreshMenu = false
        vm.$nextTick(function () {
          if (vm.$route.matched[1].meta.menus) {
            vm.refreshMenu = true
          }
        })
      })
    },
    mounted() {
    },
    methods: {
      onClick(val) {
        // console.log(val, 'val')
        this.$router.push({
          name: val
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .content-wrap {
    /*border: 1px solid red;*/
    position: relative;
    .nav-bar {
      background-color: #dcdcdc;
      position: fixed;
      top: 62px;
      bottom: 0;
      width: 180px;
    }
    .content-inner {
      padding: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
