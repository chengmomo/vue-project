<template>
  <el-row>
    <el-col :span="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称-Tree</span>
        </div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="quick-card">
        <div slot="header">
          <span>项目上手</span>
        </div>
        <el-steps space="33.33%" :active="active" direction="vertical">
          <el-step title="下载">
            <div slot="description">
              <p>$ git clone</p>
              <p>$ git clone https://github.com/sosout/vue2-element.git</p>
              <p>$ cd vue2-element</p>
            </div>
          </el-step>
          <el-step title="安装">
            <div slot="description">
              <p>// 安装前请先确保已安装node和npm</p>
              <p>// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules</p>
              <p>$ yarn install</p>
            </div>
          </el-step>
          <el-step title="运行">
            <div slot="description">
              <p>$ yarn run dev(开发版本，用于开发使用，热加载)</p>
              <p>$ yarn run build(生产版本，对代码进行混淆压缩，提取公共代码，分离css文件)</p>
            </div>
          </el-step>
        </el-steps>
        <el-button class="card-btn" v-show="active === 3" type="primary" size="small">完成</el-button>
        <el-button class="card-btn" v-show="active < 3" type="primary" size="small">下一步</el-button>
        <el-button class="card-btn" v-show="active > 1" size="small">上一步</el-button>
      </el-card>
    </el-col>
  </el-row>

</template>
<script>
  export default {
    data () {
      return {
        active: 1,
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
      }
    },
    methods: {
      handleNodeClick (data) {
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

  .el-card {
    & /deep/ {
      .el-card__header {
        padding: 0 20px;
        height: 48px;
        line-height: 48px;
      }
      .el-step__description {
        p {
          line-height: 1.5;
        }
      }
    }
  }

  .card-btn {
    margin-top: 15px;
  }
</style>
