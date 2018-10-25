<template>
	<section>
		<el-col :span="8">
			<el-card :body-style="{ padding: '10px', height: '350px' }" header="Button">
				<div style="padding: 14px;">
					<div class="bottom clearfix">
						<time class="time">{{ currentDate }}</time>
					</div>
					<div>
						<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
							<el-button>上左</el-button>
						</el-tooltip>
						<el-button type="text" class="button">文字按钮</el-button>
						<el-button type="primary">主要按钮</el-button>
						<el-button type="primary" plain>主要按钮<i class="el-icon-upload el-icon--right"></i></el-button>
						<el-button type="primary" round icon="el-icon-edit">主要按钮</el-button>
					</div>
					<el-button-group>
						<el-button type="primary" :loading="true">加载中</el-button>
						<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
						<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
					</el-button-group>
					<el-button-group>
						<el-button type="primary" icon="el-icon-share"></el-button>
						<el-button type="primary" icon="el-icon-edit" size="large">编辑</el-button>
						<el-button type="primary" icon="el-icon-delete">删除</el-button>
						<el-button type="primary" icon="el-icon-search">搜索</el-button>
					</el-button-group>
				</div>
			</el-card>
		</el-col>
		<el-col :span="8">
			<el-card :body-style="{ padding: '10px', height: '350px' }" header="Popover">
				<el-popover ref="popover1" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				</el-popover>
				<el-popover ref="popover2" placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				</el-popover>
				<el-button v-popover:popover1>hover 激活</el-button>
				<el-button v-popover:popover2>click 激活</el-button>
			</el-card>
		</el-col>
	</section>
</template>

<script>
	export default{
		name: 'Others',
		data() {
			return {
				currentDate: new Date()
			}
		},
		methods: {

		}
	}
</script>
