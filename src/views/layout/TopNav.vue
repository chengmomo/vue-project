<template>
  <el-row class="top-bar__wrap" type="flex">
    <div class="logo-container">
      <img src="@/assets/imgs/logo.png" class='logo' alt="">
      <span class='logo-text'>Vue</span>
    </div>
    <div class="right-container">
      <el-row tyle="flex" style="min-width:1000px">
        <el-col :span="18" class='menu-container'>
          <el-menu class="top-menu" mode="horizontal" router unique-opened
                   background-color="transparent" text-color="#fff" active-text-color="#545c64"
                   :default-active="$route.matched[0].path">
            <el-menu-item v-for='(item,index) in $router.options.routes' :index="item.path" :key='item.path'
                          v-if='!item.hidden' class="el-menu-item-demo" @click="menuClick(item.path)">
              <!--<i :class="item.meta.icon" v-if="item.meta"></i>-->
              {{item.name}}{{item.path}}
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class='user-container' justify="middle">
          <div class="right-menu">
            <el-tooltip effect="dark" content="主题" placement="bottom">
              <skin-comp class="right-menu-item"></skin-comp>
            </el-tooltip>
            <div>
              <img src="@/assets/imgs/logo.png" class='logo' alt="">
              <el-dropdown trigger="click" menu-align="start" @command='setDialogInfo' class="animated fadeIn">
                <span class="el-dropdown-link">
                  zhaichengjuan
                  <i class="aep-icon icon-erweima"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command='pass'>修改密码</el-dropdown-item>
                  <el-dropdown-item command='set'>系统设置</el-dropdown-item>
                  <el-dropdown-item command='logout' divided>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
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
    <el-dialog size="small" :title="dialog.title" :visible.sync="dialog.show_set" v-model="dialog.show_set"></el-dialog>
  </el-row>
</template>
<script>
  import * as api from '@/api/api'
  import SkinComp from '../../components/global/SkinComp'
  import {global} from '@/global/global'

  export default {
    name: 'TopNav',
    components: {SkinComp},
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
        }
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
    /*background: #21baa9;*/
    /*box-shadow: 1px 2px 4px #999999;*/
  }

  .logo-container {
    float: left;
    padding-left: 10px;
    width: 245px;
    box-sizing: border-box;
    /*border-right: .5px solid #666;*/
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
  }

  .user-container {
    height: 62px;
    .right-menu {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .right-menu-item {
      margin-right: 20px;
    }
    .el-dropdown-link {
      color: #fff;
      font-size: 18px;
      line-height: 60px;
      margin-left: 20px;
    }
  }

</style>
