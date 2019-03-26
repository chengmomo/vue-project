<template>
  <div class="page-container">
    <p class="warn-content">
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
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
    data() {
      return {
        driver: null
      }
    },
    mounted() {
      this.driver = new Driver()
    },
    methods: {
      guide() {
        this.driver.defineSteps(steps)
        this.driver.start()
      }
    }
  }
</script>
<style scoped lang="scss">
  .warn-content {
    background: rgba(66, 185, 131, .1);
    border-radius: 2px;
    padding: 16px;
    padding: 1rem;
    line-height: 1.6rem;
    word-spacing: .05rem;
    margin-bottom: 10px;
    a {
      color: #42b983;
      font-weight: 600;
    }
  }
</style>
