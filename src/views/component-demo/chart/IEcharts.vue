<template>
  <section class="chart-container">
        <el-row>
            <el-col :span="8">
            	<el-card class="box-card">
            		<barChart></barChart>
            	</el-card>
            </el-col>
            <el-col :span="8">
            	<el-card class="box-card">
            		 <lineChart></lineChart>
            	</el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
            		<radarChart></radarChart>
            	</el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
            		<pieChart></pieChart>
            	</el-card>
            </el-col>
            <el-col :span="12">
               <el-card class="box-card">
            		<funnelChart></funnelChart>
            	</el-card>
            </el-col>
            <el-col :span="24">
                <a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank" style="float: right;">more>></a>
            </el-col>
            </el-col>
        </el-row>
    </section>
</template>

<script>
	import barChart from '../../../components/charts/barChart.vue';
	import pieChart from '../../../components/charts/pieChart.vue';
	import lineChart from '../../../components/charts/lineChart.vue';
	import radarChart from '../../../components/charts/radarChart.vue';
	import funnelChart from '../../../components/charts/funnelChart.vue';

	export default {
		name: 'IEcharts',
		components:{
			barChart,pieChart,lineChart,radarChart,funnelChart
		},
		data () {
			return {

			}
		},
		mounted(){

		},
		updated: function () {

		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.chart-container {
		width: 100%;
		background-color: #fff;
	}
	.el-row{
		/*padding:20px 10px;*/
	}
	.el-col {
		padding:0px 5px 15px 5px;
	}
</style>
