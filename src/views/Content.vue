<template>
  <div class="content-wrapper">
    <div class="side-nav__wrap" v-if="refreshMenu">
      <side-nav></side-nav>
    </div>
    <div class="content__inner" :style="{'left': refreshMenu?'180px':'0'}">
      <main-header></main-header>
      <transition name="fade">
        <!-- keep-alive 缓存页面，可设置 include、exclude-->
        <keep-alive exclude="WangEditor,QuillEditor">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
  import SideNav from './layout/SideNav'
  import MainHeader from './layout/MainHeader'

  export default {
    name: 'Content',
    components: {MainHeader, SideNav},
    data () {
      return {
        isCollapse: false,
        refreshMenu: true
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.refreshMenu = false
        vm.$nextTick(function () {
          if (vm.$route.matched[1].meta.menus) {
            vm.refreshMenu = true
          }
        })
      })
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .content-wrapper {
    position: relative;
    .content__inner {
      padding: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
