<template>
  <div>
    <el-dropdown @command="handleCommandSkin" trigger="hover" class="eldropdown">
      <span class="el-dropdown-link lang">主题</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in skins" :key="index" :command="item.name">
          {{item.label}}
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
          {name: 'Blue', label: 'Blue'},
          {name: 'Green', label: 'Green'},
          {name: 'Purple', label: 'Purple'},
          {name: 'Default', label: 'Default'}
        ]
      }
    },
    mounted () {
    },
    methods: {
      handleCommandSkin (command) {
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

  .eldropdown {
    margin-right: 5px;
  }

  .skin {
    cursor: pointer;
  }
</style>
