<template>
  <transition :name="transitionName">
    <div class="back-to-ceiling" v-show="visible" :style="customStyle" @click="backToTop">
      <i class="el-icon-caret-top"></i>
      <!--<el-button class="button-top" icon="el-icon-caret-top" @click="backToTop"></el-button>-->
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'backTop',
    props: {
      visibilityHeight: {
        type: Number,
        default: 300
      },
      backPosition: {
        type: Number,
        default: 0
      },
      customStyle: {
        type: Object,
        default: function () {
          return {
            right: '90px',
            bottom: '60px'
          }
        }
      },
      transitionName: {
        type: String,
        default: 'fade'
      }
    },
    data () {
      return {
        visible: false,
        interval: null,
        el: null
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, true)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      handleScroll (e) {
        this.visible = e.target.scrollTop > this.visibilityHeight
        this.el = e.target
        // this.visible = window.pageYOffset > this.visibilityHeight
      },
      backToTop () {
        // const start = window.pageYOffset
        // let i = 0
        // this.interval = setInterval(() => {
        //   const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        //   if (next <= this.backPosition) {
        //     window.scrollTo(0, this.backPosition)
        //     clearInterval(this.interval)
        //   } else {
        //     window.scrollTo(0, next)
        //   }
        //   i++
        // }, 16.7)
        this.interval = setInterval(() => {
          if (this.el.scrollTop <= this.backPosition) {
            clearInterval(this.interval)
          } else {
            this.el.scrollTo(0, 0)
            // document.getElementsByClassName('main-container')[0].scrollTo(0, 0)
          }
        }, 10)
      },
      easeInOutQuad (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b
        return -c / 2 * (--t * (t - 2) - 1) + b
      }
    }
  }
</script>

<style scoped lang="scss">
  .back-to-ceiling {
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ddd;
    width: 48px;
    height: 48px;
    line-height: 54px;
    border-radius: 100%;
    box-shadow: 2px 2px 4px #ddd;
    & > i {
      font-size: 22px;
      color: #666;
    }
  }

  .back-to-ceiling:hover {
    background: #dcdcdc;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
</style>
