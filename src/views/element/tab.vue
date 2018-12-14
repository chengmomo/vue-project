<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <span slot="label"><i class="el-icon-date"></i> 用户管理</span>
      用户管理
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <wang-editor></wang-editor>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <el-button @click="jumpTo">Others</el-button>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  import WangEditor from '../component/wangEditor'

  export default {
    components: {WangEditor},
    data () {
      return {
        activeName2: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        // console.log(tab, event)
      },
      jumpTo () {
        this.$router.push({name: 'Others'})
      }
    }
  }
</script>
