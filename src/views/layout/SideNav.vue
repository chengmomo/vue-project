<template>
  <div>
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
</template>

<script>
  export default {
    name: 'SideNav',
    props: [],
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      onClick(val) {
        this.$router.push({
          name: val
        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #dcdcdc;
    position: fixed;
    top: 62px;
    bottom: 0;
    width: 180px;
  }
</style>
