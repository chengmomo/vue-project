<template>
  <div class="content__wrap">
    <div class="nav-bar__wrap" v-if="refreshMenu">
      <el-menu class='nav-bar' @select="onClick" mode="vertical"
               :default-active="$route.name">
        <!--<el-menu-item-group title="xxx">-->
        <!--<el-menu-item v-for="(item,i) in $route.matched[1].meta.menus" :index="item.name" :key="i">-->
        <!--{{item.name}}-->
        <!--</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <template v-for="(item,i) in $route.matched[1].meta.menus">
          <el-submenu :index="item.name" :key="i" v-if="item.children">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item v-for='(child,childIndex) in item.children'
                          :index='child.name' :key='childIndex'>
              {{child.name}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.name" :key="i">
            {{item.name}}
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="content__inner" :style="{'left': refreshMenu?'180px':'0'}">
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
  .content__wrap {
    /*border: 1px solid red;*/
    position: relative;
    .nav-bar {
      background-color: #dcdcdc;
      position: fixed;
      top: 62px;
      bottom: 0;
      width: 180px;
    }
    .content__inner {
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
