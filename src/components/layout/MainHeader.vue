<template>
  <el-header>
    <strong class="breadcrumb-title">{{$route.name}}</strong>
    <el-breadcrumb separator="/" class="breadcrumb-inner">
      <!--方法一-->
      <el-breadcrumb-item :to="{ path: $route.matched[0].path }">{{ $route.matched[0].name }}</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in $route.matched.slice(1)" :key="item.path">
        {{ item.name }}
      </el-breadcrumb-item>
      <!--方法二-->
      <!--<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>-->
    </el-breadcrumb>
  </el-header>
</template>

<script>
  export default {
    name: 'MainHeader',
    data() {
      return {}
    },
    mounted() {
      console.log(this.$route, 'MainHeader mounted $route.path')
    },
    methods: {
    }
  }
</script>
<style scoped>
  .el-header {
    height: 40px !important;
  }

  .breadcrumb-title {
    width: 200px;
    float: left;
    color: #475669;
  }

  .breadcrumb-inner {
    float: right;
  }
</style>
