<template>
  <el-aside width="100%" style="text-align: left; background-color: rgb(238, 241, 246)">
    <template v-for="(route,index) in $router.options.routes"
              v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
      <el-menu :default-active="$route.path" unique-opened router @open="handleopen" @close="handleclose"
               @select="handleselect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
               class='sidemenu'>
        <template v-for="(item,index) in route.children">
          <el-submenu :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              {{item.name}}
              <!-- {{item.path}} -->
            </template>
            <el-menu-item v-for='(child,childIndex) in item.children' :key='child.path'
                          :index='$route.matched[0].path+"/"+item.path+"/"+child.path'
                          v-if='!child.hidden'>
              <!-- :index='$route.matched[0].path+"/"+item.path+"/"+child.path' -->
              <!-- :index='$store.state.headerCurRouter+"/"+item.path+"/"+child.path' -->
              {{child.name}}
              <!-- {{$route.matched[0].path+'/'+item.path+'/'+child.path}} -->
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </template>
    <!-- <el-menu :default-openeds="['1', '3']" :default-active="$route.path" router @open="handleopen" @close="handleclose" @select="handleselect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"> -->
    <!-- <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>Element UI</template>
                <el-menu-item-group>
                    <template slot="title">组件</template>
                    <el-menu-item index="/form">form</el-menu-item>
                    <el-menu-item index="/table">table</el-menu-item>
                    <el-menu-item index="/others">others</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
    <!-- <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
    <!-- </el-menu> -->
  </el-aside>
</template>

<script>
  export default {
    name: 'SideMenu',
    data() {
      return {}
    },
    mounted() {
      console.log(this.$route, 'SideMenu mounted $route.path')
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      handleopen() {
        console.log('handleopen')
        console.log(this.$router.options.routes)
        console.log(this.$route.matched)
      },
      handleclose() {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidemenu {
    border: 0px;
  }
</style>
