<template>
  <div>
    <el-dropdown @command="handleCommandSkin" trigger="hover">
      <span class="el-dropdown-link lang">{{$t('tab.theme')}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in skins" :key="index" :command="item.name"
                          :disabled="skinName === item.name">
          {{$t('skinOptions.' + item.name)}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import {global} from '@/global/global'

  export default {
    name: 'skinComp',
    data () {
      return {
        skins: [
          {name: 'Blue'},
          {name: 'Green'},
          {name: 'Purple'},
          {name: 'Default'}
        ],
        skinName: 'Default'
      }
    },
    mounted () {
      this.skinName = localStorage.getItem('themeValue')
    },
    methods: {
      handleCommandSkin (command) {
        this.skinName = command
        global.changeTheme(command)
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
