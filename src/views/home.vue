<template>
  <div>
    <el-container>
      <el-header class="el-header-demo">
        <el-col :span="4" class='logo-container'>
          <img src="../assets/imgs/logo.png" class='logo' alt="">
          <span class='logo-text'>Vue</span>
        </el-col>
        <el-col :span="16" class='menu-container'>
          <el-menu theme="dark" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                   class="el-menu-demo" mode="horizontal" router unique-opened
                   :default-active="$route.matched[0].path">
            <!--:default-active="$store.state.headerCurRouter"-->
            <el-menu-item v-for='(item,index) in $router.options.routes' :index="item.path" :key='item.path'
                          v-if='!item.hidden' class="el-menu-item-demo" @click="menuClick(item.path)">
              <i :class="item.icon"></i>{{item.name}}{{item.path}}
            </el-menu-item>
            <!-- <el-menu-item index="3" class="el-menu-item-demo" >
                            <i class="el-icon-location"></i>测试
                        </el-menu-item> -->
          </el-menu>
        </el-col>
        <el-col :span="4" class='user-container'>
          <img src="../assets/imgs/logo.png" class='logo' alt="">
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
        </el-col>
      </el-header>
      <SideMenu></SideMenu>
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
      <el-dialog size="small" :title="dialog.title" :visible.sync="dialog.show_set" v-model="dialog.show_set">
      </el-dialog>
      <!-- <el-container> -->
      <!-- <el-header style="text-align: left; font-size: 12px" class="el-header-demo"> -->
      <!-- 		<el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="/home/main">
                          <i class="el-icon-location"></i>UI框架学习
                      </el-menu-item>
                      <el-submenu index="2">
                          <template slot="title">
                              <i class="el-icon-menu"></i>我的工作台
                          </template>
                          <el-menu-item index="2-1">选项1</el-menu-item>
                          <el-menu-item index="2-2">选项2</el-menu-item>
                          <el-menu-item index="2-3">选项3</el-menu-item>
                      </el-submenu>
                      <el-menu-item index="3"> <i class="el-icon-menu"></i><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                      <el-menu-item index="/home/main"> <i class="el-icon-menu"></i>订单管理</el-menu-item>
                  </el-menu>
                  <div class="line"></div> -->
      <!-- </el-header> -->
      <!-- <router-view></router-view> -->
      <!-- </el-container> -->
    </el-container>
  </div>
</template>
<script>
  import HelloWorld from '../components/HelloWorld.vue'
  import SideMenu from '../components/SideMenu.vue'
  // import Main from './main.vue'
  import * as api from './../api/api'

  export default {
    name: 'Home',
    directives: {},
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
    components: {
      HelloWorld, SideMenu
    },
    created: function () {
      console.log(this.$router, 'created $router')
    },
    mounted () {
      console.log(this.$route, 'mounted $route')
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleopen () {
        // console.log('handleopen')
      },
      handleclose () {
        // console.log('handleclose')
      },
      handleselect: function (a, b) {
      },
      menuClick (item) {
        // alert(this.$route.path)
        console.log(item, 'item')
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
<style scoped>
  .el-header-demo {
    /*border:1px solid red;*/
    /*padding-left: 220px;*/
    /*padding-right: 0px; */
    padding: 0;
    background: #545c64;
  }

  .logo-container {
    border: 1px solid black;
    height: 60px;
    padding: 0 30px;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin: 10px auto;
    float: left;
  }

  .logo-text {
    color: white;
    font-size: 22px;
    line-height: 60px;
    margin-left: 20px;
  }

  .menu-container {
    /*border:1px solid red;*/
  }

  .el-menu-demo {
    /*border:1px solid red;*/
    /*background: #545c64;*/
  }

  .el-menu-item-demo {
    font-size: 16px;
  }

  .user-container {

  }

  .el-dropdown-link {
    color: white;
    font-size: 18px;
    line-height: 60px;
    margin-left: 20px;
  }
</style>
