<template>
  <el-row class="top-bar__wrap" type="flex">
    <div class="logo-container">
      <img src="@/assets/imgs/logo.png" class='logo' alt="">
      <span class='logo-text'>Vue</span>
    </div>
    <div class="right-container">
      <el-row tyle="flex" justify="end" style="min-width:1000px">
        <el-col :span="17" class='menu-container'>
          <el-menu class="top-menu" mode="horizontal" router unique-opened
                   background-color="transparent" active-text-color="#fff" text-color="#545c64"
                   :default-active="$route.matched[0].path">
            <el-menu-item v-for='(item,index) in $router.options.routes' :index="item.path" :key='item.path'
                          v-if='!item.hidden' class="el-menu-item-demo" @click="menuClick(item.path)">
              <!--<i :class="item.meta.icon" v-if="item.meta"></i>-->
              <!--{{item.name}}{{item.path}}-->
              {{$t(item.name)}}
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="7" class='user-container'>
          <div class="right-menu">
            <!--<el-tooltip effect="dark" :content="$t('tab.theme')" placement="bottom">-->
            <skin-comp class="right-menu-item"></skin-comp>
            <!--</el-tooltip>-->
            <lang-comp class="right-menu-item"></lang-comp>
            <div>
              <el-dropdown trigger="hover" menu-align="start" @command='setDialogInfo' class="animated fadeIn">
                <span class="el-dropdown-link">
                  {{$t('tab.setting')}}
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item, index) in settingArr" :key="index" :command="item">
                    {{$t('settingOptions.' + item)}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div style="margin-left: 20px;">
              <img src="@/assets/imgs/logo.png" class='logo' alt="">
              <span class="nav-text">{{ $t('home.hello') }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog size="small" :title="dialog.title" :visible.sync="dialog.show_pass" v-model="dialog.show_pass">
      <el-form style="margin:20px;width:80%;" label-width="100px" :model="dialog.user_info"
               :rules="dialog.user_info_rules" ref='user_info'>
        <el-form-item class='edit-form' label="当前密码" prop='old_password'>
          <el-input type='password' placeholder='当前密码' auto-complete='off'
                    v-model="dialog.user_info.old_password"></el-input>
        </el-form-item>
        <el-form-item class='edit-form' label="新密码" prop='password'>
          <el-input type='password' placeholder='新密码' auto-complete='off'
                    v-model="dialog.user_info.password"></el-input>
        </el-form-item>
        <el-form-item class='edit-form' label="确认密码" prop='password_confirm'>
          <el-input type='password' placeholder='确认密码' auto-complete='off'
                    v-model="dialog.user_info.password_confirm"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.show_pass = false">取 消</el-button>
        <el-button v-dbClick type="primary" @click="updUserPass('user_info')">确 定</el-button>
      </span>
    </el-dialog>
    <drawer :visible="dialog.show_set" title="系统设置" width="420" @on-close="dialog.show_set = false">
      <div>aaa</div>
      <div slot="footer" style="text-align: right">
        <el-button @click="dialog.show_set = false">取消</el-button>
        <el-button type="primary" @click="dialog.show_set = false">确 定</el-button>
      </div>
    </drawer>
  </el-row>
</template>
<script>
  import * as api from '@/api/api'
  import {global} from '@/global/global'
  import Drawer from 'components/global/Drawer'
  import SkinComp from 'components/global/SkinComp'
  import LangComp from 'components/global/LangComp'

  export default {
    name: 'TopNav',
    components: {LangComp, Drawer, SkinComp},
    data () {
      return {
        dialog: {
          title: '',
          show_set: false,
          show_pass: false,
          user_info: {
            old_password: '',
            password: '',
            password_confirm: ''
          },
          user_info_rules: {}
        },
        settingArr: ['pass', 'set', 'logout']
      }
    },
    mounted () {
      // 加载用户主题
      if (localStorage.getItem('themeValue')) {
        global.loadTopNav(localStorage.getItem('themeValue'))
      } else {
        global.loadTopNav('default')
      }
    },
    methods: {
      menuClick (item) {
        this.$store.commit('setHeaderCurRouter', item)
        // alert(this.$store.getters.getHeaderCurRouter)
      },
      /**
       * 弹出框-修改密码或者系统设置
       * @param {string} cmditem 弹框类型
       */
      setDialogInfo (cmditem) {
        if (!cmditem) {
          console.log('test')
          this.$message('菜单选项缺少command属性')
          return
        }
        switch (cmditem) {
          case 'info':
            // this.$router.push({
            //   path: '/demo/user/edit',
            //   query: {
            //     id: this.$store.state.user.userinfo.id
            //   }
            // })
            break
          case 'pass':
            this.dialog.show_pass = true
            this.dialog.title = '修改密码'
            break
          case 'set':
            // this.onGetSetting()
            this.dialog.show_set = true
            this.dialog.title = '系统设置'
            break
          case 'logout':
            this.logout()
            break
        }
      },
      updUserPass () {
        api.requestLogin({
          a: '2'
        }).then(r => {
          if (r.data && r.data.code === 0) {

          }
        })
      },
      logout () {
        this.$confirm('你确定退出登录么?', '确认退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$store.dispatch('remove_userinfo').then(() => {
          this.$router.push('/')
          // })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-bar__wrap {
    padding: 0;
  }

  .logo-container {
    float: left;
    padding-left: 10px;
    width: 200px;
    box-sizing: border-box;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin: 10px auto;
    float: left;
  }

  .logo-text {
    font-size: 22px;
    line-height: 60px;
    margin-left: 20px;
    color: #fff;
  }

  .right-container {
    float: left;
    width: -moz-calc(100% - 245px);
    width: -webkit-calc(100% - 245px);
    width: calc(100% - 245px);
  }

  .el-menu-item {
    box-sizing: content-box;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }

  .el-menu-item-demo {
    font-size: 16px;
    width: 140px;
    text-align: center;
    font-weight: bold;
  }

  .user-container {
    height: 62px;
    .right-menu {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    .right-menu-item {
      margin-right: 20px;
    }
    .el-dropdown-link {
      color: #fff;
      line-height: 60px;
    }
    .nav-text {
      color: white;
      font-size: 14px;
      padding: 0 10px;
      line-height: 60px;
    }
  }
</style>
