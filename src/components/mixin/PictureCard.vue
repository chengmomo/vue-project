<template>
  <div class="card-container">
    <el-row :gutter="20" style="padding: 6px;">
      <el-col :span="span" v-for="(item,index) in data" :key="index">
        <div class="item">
          <img :src="item.src" class="item-img">
          <div class="item-text" :style="{backgroundColor: bgColor,color: color}">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'pictureCard',
    props: ['options'],
    data () {
      return {
        span: this.options.span || 8,
        data: this.options.data || [],
        bgColor: this.options.bgColor || '#2e323f',
        color: this.options.color || '#fff'
      }
    },
    mounted () {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .card-container {
    //$width: 350px;
    $height: 200px;
    .item {
      position: relative;
      height: $height;
      //width: $width;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 5px;
      &:hover .item-text {
        left: 0;
      }
      &:hover .item-img {
        transform: scale(3) rotate(25deg);
      }
    }
    .item-img {
      /*width: 100%;*/
      height: $height;
      border-radius: 5px;
      transform-origin: 50% 24%;
      transition: all 0.5s ease-in-out;
    }
    .item-text {
      position: absolute;
      // left: $width;
      left: 200px;
      top: 0;
      width: 100%;
      height: $height;
      border-radius: 5px;
      opacity: 0.8;
      transition: left .4s;
      & > h3 {
        padding: 20px 0;
        text-indent: 1em;
      }
      & > p {
        font-size: 14px;
        line-height: 20px;
        text-indent: 2.4em;
      }
    }
  }
</style>
