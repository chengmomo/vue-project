<template>
  <transition name="fade-in">
    <div class="drawer__wrapper" v-show="visible">
      <div :class="open?'drawer__mask':''" @click="handleClose"></div>
      <el-container class="drawer__content" :style="{width: width+'px'}"
                    :class="visible?'drawer__open':'drawer__close'">
        <el-header class="drawer__header">
          {{title}}
          <div style="float: right">
            <el-button plain class="icon-button" icon="el-icon-close" @click="handleClose(true)"></el-button>
          </div>
        </el-header>
        <el-main class="drawer__body">
          <slot></slot>
        </el-main>
        <el-footer class="drawer__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'drawer',
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '标题'
      },
      width: {
        type: String,
        default: '400'
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      transitionName: {
        type: String,
        default: 'fade'
      }
    },
    data () {
      return {
        open: true
      }
    },
    mounted () {
    },
    methods: {
      handleClose (type) {
        if (type) {
          this.$emit('on-close')
        } else {
          if (this.closeOnClickModal) {
            this.$emit('on-close')
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .drawer__mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(55, 55, 55, .5);
  }

  .drawer__content {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 1000;
    background: #fff;
    /*transition: left linear 10s;*/
    /*transition: all 0.5s ease-in-out;*/
    .drawer__header {
      line-height: 60px;
      border-bottom: 1px solid #dddddd;
      .icon-button {
        border: 0;
      }
    }
  }

  .fade-in-enter-active,
  .fade-in-leave-active {
  }

  .fade-in-enter,
  .fade-in-leave-to {
  }
</style>
