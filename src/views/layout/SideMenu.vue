<template>
  <div class='side-container'>
    <!--<div class='side-container' :style="{'width': isCollapse?'265px':'400px'}">-->
    <!--<div class='side-container' :style="{'width': '200px'}">-->
    <template v-for="(route,i) in $router.options.routes"
              v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
      <el-menu :default-active="$route.matched[1].path" router unique-opened @select="handleSelect"
               class='side-menu' background-color="transparent" text-color="#fff"
               :collapse="isCollapse" :collapse-transition="isTransition">
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
        <i class="el-icon-menu collapse-icon" @click="handleToggle()"></i>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
    props: ['isCollapse'],
    data () {
      return {
        isTransition: false
      }
    },
    mounted () {
      // console.log(this.$router.options.routes)
    },
    methods: {
      handleSelect (index, indexPath) {
        // console.log(index, indexPath)
        // console.log(this.$route)
      },
      handleToggle () {
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
    left: 0;
    background-color: #545c64;
    overflow: hidden;
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
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #293038;
  }

  .collapse-icon {
    cursor: pointer;
    font-size: 18px;
    color: #999999;
  }

  .collapse-icon:hover, .collapse-icon:focus {
    color: #ddd;
  }
</style>
