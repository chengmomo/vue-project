<template>
	<div class="login-bg">
		<div class="login-container">
			<h3 class="login-title">欢迎登录xx后台管理系统</h3>
			<p class="login-subtitle">( by vue + element ui )</p>
			<el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="75px" label-position="left" status-icon class="loginForm">
				<el-form-item prop="username" label="用户名">
					<el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
				</el-form-item>
				<el-form-item prop="password" label="密码">
					<el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
				</el-form-item>
				<div class="login-buttons">
				<el-button type="primary" :loading="loading" @click="handleSubmit('loginForm')" class="login-button">登录</el-button>
				<el-button @click.native.prevent="handleReset('loginForm')" class="login-button">重置</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>
<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码长度至少六位', trigger: 'blur'}
            // { validator: checkNumber, trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    mounted () {
      console.log($, 'mounted $')
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$router.push({path: '/home/element/form'})
            this.loading = false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleReset(formName) {
        this.$refs[formName].resetFields()
        // this.$router.push({ path: '/home' });
      }
    }
  }
</script>
<style scoped>
.login-bg{
	background: url('../assets/imgs/login-bg.jpeg');
	background-repeat: no-repeat;
	background-size: cover;
	height:100%;
}
.login-container{
	width: 360px;
	height: 285px;
	background: #f3f3f4;
	box-shadow: 1px 1px 5px #cccccc;
	opacity: 0.9;
	padding: 20px 35px;
	border-radius: 5px;
	position: absolute;
	top:220px;
	right:18%;
}
.login-title,.login-subtitle,.login-buttons{
	text-align: center;
	font-size:20px;
	margin: 16px 0px;
}
.login-subtitle{
	font-size:14px;
	margin-bottom: 20px;
}
.loginForm{
	width: 90%;
	margin:0 auto;
}
.login-button{
	font-size: 14px;
	width: 90px;
	margin: 8px 10px;
}
</style>
