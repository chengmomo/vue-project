<template>
  <div class="page-container">
    <p class="warn-content">
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">
        参考 driver.js
      </a>
    </p>
    <p style="padding: 10px 0">
      <router-link to="https://github.com/kamranahmedse/driver.js" target="_blank">
        <el-button type="primary">文档</el-button>
      </router-link>
      <a :href="url" target="_blank">
        <el-button type="primary">
          文档
        </el-button>
      </a>
      <el-button type="primary" @click.prevent.stop="open">文档open</el-button>
    </p>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">Show Guide</el-button>
  </div>
</template>

<script>
  import Driver from 'driver.js' // import driver.js
  import 'driver.js/dist/driver.min.css' // import driver.js css
  import steps from './defineSteps'

  export default {
    name: 'Guide',
    data () {
      return {
        driver: null,
        url: 'https://help.ctwing.cn/ding-yue-tui-song/mqxiao-xi-tui-song.html'
      }
    },
    mounted () {
      this.driver = new Driver()
    },
    methods: {
      guide () {
        this.driver.defineSteps(steps)
        this.driver.start()
      },
      open () {
        window.open(this.url)
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
