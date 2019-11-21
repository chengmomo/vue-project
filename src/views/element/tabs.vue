<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="已读消息" name="first">
      已读消息
    </el-tab-pane>
    <!--lazy：true首次进入tabs页不加载，延迟渲染-->
    <el-tab-pane label="未读消息" name="second" :lazy="true">
      <tab-pane></tab-pane>
    </el-tab-pane>
    <el-tab-pane label="其他" name="third">
      其他
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import TabPane from './tabPane'

  export default {
    components: {TabPane},
    data () {
      return {
        activeName: 'first'
      }
    },
    mounted () {
      console.log(this.$router, 'router')
    },
    methods: {
      handleClick (tab, event) {
        // console.log(tab, event)
        console.log(this.activeName, 'handleClick')
      }
    }
  }
</script>
<style>
</style>
