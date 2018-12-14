<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称-Tree</span>
    </div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box-card {
    width: 230px;
  }

  .el-tree {
    /*border: 1px solid #ddd;*/
    border-radius: 5px;
    min-height: 500px;
    padding: 10px;
    /*width: 160px;*/
  }
</style>
