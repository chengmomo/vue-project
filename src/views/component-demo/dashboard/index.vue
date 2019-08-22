<template>
  <div class="page-container">
    <div class="item">
      <h4>数据展示</h4>
      <count-card :options="countOptions"></count-card>
    </div>
    <div class="item">
      <h4>图片动效</h4>
      <picture-card :options="options"></picture-card>
    </div>
  </div>
</template>

<script>
  import PictureCard from '../../../components/mixin/PictureCard'
  import CountCard from '../../../components/mixin/CountCard'

  export default {
    name: 'dashboard',
    components: {CountCard, PictureCard},
    data () {
      return {
        countOptions: {
          data: [
            {bgColor: '#21baa9', title: '文章3', text: 'sawqxxx123', key: '文', start: 4323, end: 8932},
            {bgColor: 'rgb(56, 161, 242)', title: '文章1', text: '11wqwqxxx', key: '文', start: 999, end: 3789},
            {bgColor: '#7B7DE5', title: '文章4', text: 'xxxax221113', key: '文', start: 7898, end: 12065},
            {bgColor: 'rgb(59, 103, 164)', title: '文章2', text: '234346463xxxxx', key: '文', start: 2345, end: 5907}
          ]
        },
        options: {
          span: 6,
          data: [
            {src: 'static/img/card/card-1.jpg', title: '景点1', text: 'dsnsanxsnx'},
            {src: 'static/img/card/card-2.jpg', title: '景点2', text: 'saxxxx'},
            {src: 'static/img/card/card-3.jpg', title: '景点3', text: 'xxxx'},
            {src: 'static/img/card/card-1.jpg', title: '景点4', text: 'xxxx'}
          ]
        }
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .item {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 10px;
  }
</style>
