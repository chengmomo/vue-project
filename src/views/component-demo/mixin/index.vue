<template>
  <div class="page-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <span>图片hover效果</span>
          </div>
          <picture-slide height="120px" width="120px"
                         image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
            <h3>picture</h3>
            <h3>slide</h3>
            <h3>!!!</h3>
          </picture-slide>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <span>Material Design 的input</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <span>图片hover效果</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <span>图片hover效果</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PictureSlide from '../../../components/mixin/PictureSlide'

  export default {
    name: 'mixinDemo',
    components: {PictureSlide},
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style scoped>

</style>
