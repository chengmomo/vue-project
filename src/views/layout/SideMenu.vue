<template>
  <div class='side-container'>
    <!--<div class='side-container' :style="{'width': isCollapse?'265px':'400px'}">-->
    <!--<div class='side-container' :style="{'width': '200px'}">-->
    <template v-for="(route,i) in $router.options.routes"
              v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
      <el-menu :default-active="$route.matched[1].path" router unique-opened
               @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
               class='side-menu' :collapse="isCollapse" :collapse-transition="isTransition">
        <template v-for="(item,j) in route.children">
          <el-menu-item :index='item.path' :key="j">
            <i :class="item.meta.icon" v-if="item.meta"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <!--<el-submenu :index="item.path">-->
          <!--<template slot="title">-->
          <!--<i :class="item.meta.icon" v-if="item.meta"></i>-->
          <!--<span slot="title">{{item.name}}</span>-->
          <!--</template>-->
          <!--<el-menu-item v-for='(child,childIndex) in item.children' :key='child.path'-->
          <!--:index='$route.matched[0].path+"/"+item.path+"/"+child.path'-->
          <!--v-if='!child.hidden'>-->
          <!--{{child.name}}-->
          <!--</el-menu-item>-->
          <!--</el-submenu>-->
        </template>
      </el-menu>
      <div class='collapse-container' :style="{'width': isCollapse?'65px':'200px'}">
        <el-button icon="el-icon-menu" class="collapse" @click="handleToggle()"></el-button>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
    props: ['isCollapse'],
    data() {
      return {
        isTransition: false
      }
    },
    mounted() {
      // console.log(this.$router.options.routes)
    },
    methods: {
      handleSelect(index, indexPath) {
        // console.log(index, indexPath)
        // console.log(this.$route)
      },
      handleToggle() {
        this.$emit('on-toggle')
      }
    }
  }
</script>

<style scoped>
  .side-container {
    position: fixed;
    top: 62px;
    bottom: 0;
    background-color: #545c64;
    z-index: 102;
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .side-menu {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .el-menu {
    border-right: 0;
  }

  .collapse-container {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #293038;
  }

  .collapse {
    width: 100%;
    border: 0;
    font-size: 18px;
    color: #999999;
    background-color: #293038;
  }
</style>
