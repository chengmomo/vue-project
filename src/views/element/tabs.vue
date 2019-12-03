<template>
  <!--lazy：true首次进入tabs页不加载，延迟渲染-->
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="已读消息" name="first">
      <form-demo v-if="activeName === 'first'"></form-demo>
    </el-tab-pane>
    <el-tab-pane label="未读消息" name="second" :lazy="true">
      <tab-pane v-if="activeName === 'second'"></tab-pane>
    </el-tab-pane>
    <el-tab-pane label="其他" name="third">
      <form-demo v-if="activeName === 'third'"></form-demo>
    </el-tab-pane>
  </el-tabs>
  <!--动态组件与缓存：tabs组件初次进入渲染所有tab页；+v-if可以不一起渲染；+keep-alive可以缓存渲染过得组件-->
  <!--<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">-->
  <!--<el-tab-pane v-for="(item,index) in tabs" :label="item.label" :name="item.name" :key="index">-->
  <!--&lt;!&ndash;<keep-alive>&ndash;&gt;-->
  <!--<component :is="item.content" v-if="item.name === activeName"></component>-->
  <!--&lt;!&ndash;</keep-alive>&ndash;&gt;-->
  <!--</el-tab-pane>-->
  <!--</el-tabs>-->
  <!--key：vue会复用组件，多个tab如果使用同一组件，+key可以保证各自渲染-->
  <!--<el-card>-->
  <!--<el-row>-->
  <!--<el-row class="switch-head__wrap">-->
  <!--<el-col :span="12" class="switch-head__title">-->
  <!--<span :class="activeName === 'first' ? 'active' : ''" @click="onTabClick('first')">设备日志</span>-->
  <!--/-->
  <!--<span :class="activeName === 'second' ? 'active' : ''" @click="onTabClick('second')">群组日志</span>-->
  <!--</el-col>-->
  <!--</el-row>-->
  <!--<form-demo key="first" v-if="activeName === 'first'"></form-demo>-->
  <!--<form-demo key="second" v-else></form-demo>-->
  <!--&lt;!&ndash;<tab-pane v-else></tab-pane>&ndash;&gt;-->
  <!--&lt;!&ndash;<component :is="activeContent" :key="activeName"></component>&ndash;&gt;-->
  <!--</el-row>-->
  <!--</el-card>-->
  <!--<el-card>-->
  <!--<el-row type="flex" class="switch-head__wrap">-->
  <!--<el-col :span="12" class="switch-head__title">-->
  <!--<span :class="activeName === 'first' ? 'active' : ''" @click="onTabClick('first', 'FormDemo')">用户</span>-->
  <!--/-->
  <!--<span :class="activeName === 'second' ? 'active' : ''" @click="onTabClick('second', 'CollapseDemo')">产品</span>-->
  <!--/-->
  <!--<span :class="activeName === 'third' ? 'active' : ''" @click="onTabClick('third', 'TabPane')">设备</span>-->
  <!--</el-col>-->
  <!--</el-row>-->
  <!--&lt;!&ndash;<keep-alive exclude="CollapseDemo">&ndash;&gt;-->
  <!--<router-view :key="$route.fullPath"></router-view>-->
  <!--&lt;!&ndash;</keep-alive>&ndash;&gt;-->
  <!--</el-card>-->
</template>
<script>
  import TabPane from './tabPane'
  import Collapse from './collapse'
  import FormDemo from './form'

  export default {
    components: {FormDemo, Collapse, TabPane},
    data () {
      return {
        activeName: 'first',
        tabs: [
          {label: '已读消息', name: 'first', content: FormDemo},
          {label: '未读消息', name: 'second', content: FormDemo},
          {label: '其他', name: 'third', content: TabPane}
        ],
        activeContent: FormDemo
      }
    },
    watch: {
      '$route' (to) {
        // console.log(to.name, 'watch $route')
        this.processActiveTab(to.name)
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // console.log(to.name, 'beforeRouteEnter')
        vm.processActiveTab(to.name)
      })
    },
    mounted () {
      // console.log(this.$router, 'router')
    },
    methods: {
      processActiveTab (name) {
        if (name === 'CollapseDemo') {
          this.activeName = 'second'
        } else if (name === 'TabPane') {
          this.activeName = 'third'
        } else {
          this.activeName = 'first'
        }
      },
      handleClick (tab, event) {
        // console.log(tab, event)
        console.log(this.activeName, 'handleClick')
      },
      onTabClick (tab, routeName) {
        this.activeName = tab
        // if (this.activeName === 'second') {
        //   this.activeContent = TabPane
        // } else {
        //   this.activeContent = FormDemo
        // }
        if (routeName) {
          this.$router.push({
            name: routeName
          })
        }
      }
    }
  }
</script>
<style lang="scss">
  // 头部tab切换按钮
  .switch-head__wrap {
    margin: 10px 5px 20px;
    font-size: 18px;
    .switch-head__title span:hover {
      color: skyblue;
      cursor: pointer;
    }
    .active {
      color: skyblue;
    }
  }
</style>
