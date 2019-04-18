<template>
  <div class="count-container">
    <el-row :gutter="25" style="padding: 6px">
      <el-col :span="span" v-for="(item,index) in data" :key="index">
        <div class="item" :style="{backgroundColor: item.bgColor}">
          <div class="item-header">
            <p class="item-title">{{item.title}}</p>
            <span>实时</span>
          </div>
          <p class="item-body">
            <vue-count-up :start="item.start" :end="item.end"></vue-count-up>
          </p>
          <p class="item-text">{{item.text}}</p>
          <p class="item-tip">{{item.key}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'countCard',
    props: ['options'],
    data () {
      return {
        span: this.options.span || 6,
        data: this.options.data || []
      }
    },
    mounted () {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .count-container {
    $height: 100px;
    .item {
      color: white;
      height: $height;
      border-radius: 4px;
      padding: 12px 15px;
      position: relative;
      .item-header {
        position: relative;
        .item-title {
          margin-bottom: 8px;
          font-size: 15px;
        }
        & > span {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
      }
      .item-body {
        font-size: 26px;
        /*text-indent: 32px;*/
        font-weight: bold;
        margin-bottom: 15px;
      }
      .item-text {
        font-size: 12px;
      }
      .item-tip {
        position: absolute;
        top: 8px;
        right: 15px;
        width: 70px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 44px;
        border-radius: 100%;
        border: 2px solid #fff;
        opacity: 0.1;
        transform: rotate(-40deg);
      }
    }
  }
</style>
