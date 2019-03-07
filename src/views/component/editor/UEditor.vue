<template>
  <div class="components-container">
    <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。<br>使用参考：http://www.cnblogs.com/dmcl/p/7152711.html
    </div>
    <button @click="getUEContent()">获取内容</button>
    <button @click="getUEContentTxt()">获取无文本内容</button>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
      <!--<UE :defaultMsg=defaultMsg :config=config :id=ue2 ref="ue2"></UE>-->
    </div>
  </div>
</template>

<script>
  import UE from '@/components/editor/UE/index.vue'

  export default {
    components: {UE},
    data () {
      return {
        defaultMsg: '<span style="orphans: 2; widows: 2; font-size: 22px; font-family: KaiTi_GB2312; background-color: rgb(229, 51, 51);"><strong>夏钧姗：成功的投资需具备哪些心态和掌握哪些重要止损位</strong></span>',
        // defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: 'ue1', // 不同编辑器必须不同的id
        ue2: 'ue2'
      }
    },
    methods: {
      getUEContent () {
        let content = this.$refs.ue.getUEContent()
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        })
        console.log(content)
      },
      getUEContentTxt () {
        let content = this.$refs.ue.getUEContentTxt() // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        })
        console.log(content)
      }
    }
  }
</script>

<style>
  .info {
    line-height: 20px;
    margin-bottom: 15px;
  }
</style>
