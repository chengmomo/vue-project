<template>
  <div class="page-container">
    <p class="warn-content">
      <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">
        参考百度地图 Vue Baidu Map
      </a>
    </p>
    <!--<baidu-map class="bm-view" center="南京" mapType="BMAP_HYBRID_MAP"></baidu-map>-->
    <el-card>
      <el-input v-model.number="center.lng"></el-input>
      <el-input v-model.number="center.lat"></el-input>
      <el-input v-model.number="zoom"></el-input>
    </el-card>
    <baidu-map class="bm-view" :center="center" :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler"
               @moving="syncCenterAndZoom"
               @moveend="syncCenterAndZoom"
               @zoomend="syncCenterAndZoom">
      <!--标记点-->
      <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
        <!--animation="BMAP_ANIMATION_BOUNCE"-->
        <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '18px'}" :offset="{width: -50, height: 30}"></bm-label>
      </bm-marker>
      <!--自定义控件-->
      <bm-control>
        <!--<el-button @click="addZoom(19)">缩放至最大</el-button>-->
        <!--<el-button @click="addZoom(10)">还原</el-button>-->
        <!--<el-button @click="addZoom(3)">缩放至最小</el-button>-->
      </bm-control>
      <!--定位控件-->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
  export default {
    name: 'mapComp',
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      },
      // addZoom (level) {
      //   this.zoom = level
      // },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      }
    }
  }
</script>

<style scoped lang="scss">
  .bm-view {
    width: 100%;
    height: 280px;
    margin-bottom: 10px;
    /deep/ .anchorBL {
      // 隐藏左下角百度地图logo
      display: none;
    }
  }
</style>
