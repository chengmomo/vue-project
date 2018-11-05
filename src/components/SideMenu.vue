<template>
	<div class="main">
		<el-container style="min-height:750px;border: 1px solid #eee">
			<el-col :span="4" class='sidemenu-container'>
				<el-aside width="100%" style="text-align: left; background-color: rgb(238, 241, 246)">
					<template v-for="(route,index) in $router.options.routes"
					v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
					<el-menu :default-active="$route.path" unique-opened router @open="handleopen" @close="handleclose" @select="handleselect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" class='sidemenu'>
						<template v-for="(item,index) in route.children">
							<el-submenu :index="item.path">
								<template slot="title">
									<i :class="item.icon"></i>
									{{item.name}}
									<!-- {{item.path}} -->
								</template>
								<el-menu-item v-for='(child,cindex) in item.children' :key='child.path' :index='$route.matched[0].path+"/"+item.path+"/"+child.path'>
								<!-- :index='$route.matched[0].path+"/"+item.path+"/"+child.path' -->
								<!-- :index='$store.state.headerCurRouter+"/"+item.path+"/"+child.path' -->
									{{child.name}}
									<!-- {{$route.matched[0].path+'/'+item.path+'/'+child.path}} -->
								</el-menu-item>
							</el-submenu>
						</template>
					</el-menu>
				</template>
				<!-- <el-menu :default-openeds="['1', '3']" :default-active="$route.path" router @open="handleopen" @close="handleclose" @select="handleselect"
				background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"> -->
				<!-- <el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>Element UI</template>
					<el-menu-item-group>
						<template slot="title">组件</template>
						<el-menu-item index="/form">form</el-menu-item>
						<el-menu-item index="/table">table</el-menu-item>
						<el-menu-item index="/others">others</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项4-1</el-menu-item>
					</el-submenu>
				</el-submenu> -->
				<!-- <el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>导航二</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项4-1</el-menu-item>
					</el-submenu>
				</el-submenu> -->
				<!-- </el-menu> -->
			</el-aside>
		</el-col>
		<el-col :span="20" class='main-container'>
			<el-main class="el-main-demo">
				<el-col :span="24" class="el-breadcrumb-container">
					<strong class="breadcrumb-title">{{$route.name}}</strong>
					<el-breadcrumb separator="/" class="breadcrumb-inner">
						<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
							{{ item.name }}
						</el-breadcrumb-item>
					</el-breadcrumb>
				</el-col>
				<el-col :span="24" class="el-content-wrapper">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-col>
				<!-- <div class="el-content-container">
					<router-view></router-view>
				</div> -->
			</el-main>
		</el-col>
	</el-container>
</div>
</template>

<script>
  export default {
    name: 'SideMenu',
    data() {
      return {}
    },
    mounted () {
      console.log(this.$route, 'SideMenu mounted $route.path')
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      handleopen() {
        console.log('handleopen')
        console.log(this.$router.options.routes)
        console.log(this.$route.matched)
      },
      handleclose() {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
	border: 1px solid red;
}
.sidemenu-container{
	/*border: 1px solid red;*/
	background: #545c64;
}
.sidemenu{
	border: 0px;
}
.el-main-demo{
	border: 2px solid red;
	background-color: #fff;
	height:100%;
}
.el-breadcrumb-container{
	margin-bottom: 25px;
}
.el-breadcrumb-container .breadcrumb-title {
	width: 200px;
	float: left;
	color: #475669;
}
.breadcrumb-inner {
	float: right;
}
.el-content-wrapper {
	box-sizing: border-box;
}
</style>
