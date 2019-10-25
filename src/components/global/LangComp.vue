<template>
  <div>
    <el-dropdown @command="handleCommand" trigger="hover">
      <span class="el-dropdown-link lang">
        {{$t('tab.lang')}}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in lang" :key="index" :command="item.name"
                          :disabled="langName===item.name">
          {{$t('langOptions.' + item.name)}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    name: 'langComp',
    data () {
      return {
        lang: [
          {name: 'en'},
          {name: 'zh'}
        ],
        langName: 'zh'
      }
    },
    mounted () {
      this.$i18n.locale === 'zh' ? this.langName = 'zh' : this.langName = 'en'
    },
    methods: {
      handleCommand (command) {
        this.langName = command
        this.$i18n.locale = this.langName
        localStorage.setItem('langValue', this.langName)
        this.$message({
          message: this.$i18n.locale === 'zh' ? '切换成功' : 'switch language success',
          type: 'success'
        })
      }
    }
  }
</script>

<style scoped>
  .lang {
    cursor: pointer;
    color: white;
  }
</style>
