<template>
  <div class="count-container">
    <el-row :gutter="25" style="padding: 6px">
      <el-col :span="span" v-for="(item,index) in data" :key="index">
        <div class="item" :style="{backgroundColor: item.bgColor}">
          <p class="item-title">{{item.title}}</p>
          <p class="item-num">
            <vue-count-up :start="item.start" :end="item.end"></vue-count-up>
          </p>
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
      border-radius: 5px;
      padding: 20px;
      .item-title {
        margin-bottom: 20px;
        font-size: 16px;
      }
      .item-num {
        font-size: 24px;
        text-indent: 32px;
        font-weight: bold;
      }
    }
  }
</style>
