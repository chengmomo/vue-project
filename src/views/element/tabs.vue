<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="已读消息" name="first">
    </el-tab-pane>
    <el-tab-pane label="未读消息" name="second">
    </el-tab-pane>
    <el-tab-pane label="222" name="third">
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        activeName2: 'first'
      }
    },
    mounted () {
      console.log(this.$router, 'router')
    },
    methods: {
      handleClick (tab, event) {
        // console.log(tab, event)
      }
    }
  }
</script>
<style>
</style>
