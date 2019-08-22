<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="12">
        <g-line :charData="serverData" :id="'c1'" id="c1"></g-line>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import GLine from '../../../components/g2/G2Line'

  export default {
    name: 'G2',
    components: {
      GLine
    },
    data () {
      return {
        serverData: []
      }
    },
    mounted: function () {
      this.serverData = [
        {'mzkId': 112, 'strftime': '2017-01-11', 'value': 9275501},
        {'mzkId': 112, 'strftime': '2017-01-12', 'value': 9281904},
        {'mzkId': 112, 'strftime': '2017-01-13', 'value': 9290777},
        {'mzkId': 112, 'strftime': '2017-01-14', 'value': 9297913},
        {'mzkId': 112, 'strftime': '2017-01-15', 'value': 9306918},
        {'mzkId': 112, 'strftime': '2017-01-16', 'value': 9315641}
      ]
    },
    methods: {
      // 此处省略从服务器获取数据并且赋值给this.serverData
      // 推荐使用axios请求接口
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chart-container {
    width: 100%;
    float: left;
  }

  .el-col {
    padding: 30px 20px;
  }
</style>
