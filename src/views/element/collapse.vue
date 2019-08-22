<template>
  <section>
    <el-collapse v-model="collapse.activeNames" :accordion="collapse.accordion" @change="handleChange">
      <el-collapse-item v-for="(item, index) in collapse.data" :key="index" :name="index">
        <template slot="title">
          <div class="collapse-header">
            <el-row type="flex" justify="space-between">
              <el-col :span="10" class="title-style">
                <span>{{item.name}}</span>
              </el-col>
              <el-col :span="5" class="id-style">
                <span>{{item.path}}</span>
              </el-col>
              <el-col :span="9">
                <span></span>
              </el-col>
            </el-row>
          </div>
        </template>
        <div class="collapse-content" v-for="(contentItem, contentIndex) in item.list">
          <el-row type="flex" justify="space-between" class="content-item">
            <el-col :span="10" class="content-title">
              <span>{{contentItem.name}}</span>
            </el-col>
            <el-col :span="5" class="id-style">
              <span>{{contentItem.path}}</span>
            </el-col>
            <el-col :span="9" class="option-style">
              <el-button-group>
                <el-tooltip effect="dark" placement="top" :content="'执行'+contentItem.path">
                  <el-button class="option-button">执行</el-button>
                </el-tooltip>
              </el-button-group>
              <el-button-group>
                <el-tooltip effect="dark" placement="top" :content="'编写'+contentItem.path">
                  <el-button class="option-button">编写</el-button>
                </el-tooltip>
              </el-button-group>
            </el-col>
          </el-row>
          <template v-for="(childItem, i) in contentItem.list">
            <el-row type="flex" justify="space-between" class="child-item">
              <el-col :span="10" class="child-title">
                <span>{{childItem.name}}</span>
              </el-col>
              <el-col :span="5" class="id-style">
                <span>{{childItem.path}}</span>
              </el-col>
              <el-col :span="9" class="option-style">
                <el-button-group>
                  <el-tooltip effect="dark" placement="top" :content="'执行'+childItem.path">
                    <el-button class="option-button">执行</el-button>
                  </el-tooltip>
                </el-button-group>
                <el-button-group>
                  <el-tooltip effect="dark" placement="top" :content="'编写'+childItem.path">
                    <el-button class="option-button">编写</el-button>
                  </el-tooltip>
                </el-button-group>
              </el-col>
            </el-row>
          </template>
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script>
  export default {
    name: 'Collapse',
    data () {
      return {
        collapse: {
          accordion: false,
          activeNames: [0],
          data: []
        }
      }
    },
    // 初始化属性值
    created () {
      this.collapse.data = [
        {
          name: 'sadhgvw',
          path: '/1',
          list: [
            {
              name: 'SSS',
              path: '/1/1',
              list: [{name: 'sadhgvw', path: '/1/1/1'}, {name: 'sadhgvw', path: '/1/1/2'}]
            },
            {
              name: 'AAA',
              path: '/1/2',
              list: [{name: 'sadhgvw', path: '/1/2/1'}, {name: 'sadhgvw', path: '/1/2/2'}]
            }
          ]
        },
        {
          name: 'wqddd',
          path: '/2',
          list: [{name: 'saaaaaaa', path: '/2/2', list: [{name: 'sadhgvw', path: '/2/2'}]}]
        },
        {
          name: 'QQQQ',
          path: '/3',
          list: [{name: 'saaaaaaa', path: '/2/2', list: []}]
        }
      ]
    },
    // 调用接口请求
    mounted () {

    },
    methods: {
      handleChange (activeNames) {
        // console.log(activeNames, 'activeNames')
      }
    }
  }
</script>
<style scoped lang="scss">
  .el-collapse {
    border: 1px solid #DDD;
    & /deep/ {
      .el-collapse-item__header {
        border-bottom: 1px solid #DDD;
        background-color: #f5f5f5;
        padding: 2px 5px 2px 15px;
        color: #2C9CFA;
        font-size: 16px;
        font-weight: bold;
      }
      .el-collapse-item__content {
        padding: 22px 24px 22px 0;
        font-size: 14px;
      }
    }
    .collapse-header {
      width: 100%;
    }
    .id-style {
      text-align: left;
      color: #606266;
      font-size: 13px;
      font-weight: normal;
    }
    .title-style {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content-item {
      align-items: center;
      .content-title {
        padding: 0 15px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .child-item {
      .child-title {
        padding-left: 35px;
        padding-right: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .option-style {
      .el-button--small {
        padding: 0 12px;
        margin-bottom: 0px;
        font-size: 13px;
      }
      .option-button {
        height: 28px;
        padding: 0 12px;
        &:hover, &:focus {
          background-color: #f5f5f5;
          color: #606266;
          border: 1px solid #DDD
        }
      }
    }
  }
</style>
