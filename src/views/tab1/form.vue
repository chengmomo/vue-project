<template>
	<div class="form">
		<el-form :model="ruleForm" :rules="rules" :inline="false" ref="ruleForm" label-width="100px" label-position="right" class="demo-ruleForm" status-icon @submit.native.prevent>
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name" clearable></el-input>
			</el-form-item>
      <el-form-item label="活动人数" prop="number">
        <el-input v-model.number="ruleForm.number"></el-input>
      </el-form-item>
			<el-form-item label="活动区域" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间" required>
				<el-col :span="11">
					<el-form-item prop="date1">
						<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" format="yyyy 年 MM 月 dd 日" ></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="date2">
						<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            <!-- value-format="yyyy-MM-dd" value-format="HH:mm:ss" -->
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送" prop="delivery">
				<el-switch v-model="ruleForm.delivery"></el-switch>
			</el-form-item>
      <el-form-item label="折扣" prop="discount">
          <el-slider v-model="ruleForm.discount"  show-input style="width:80%"></el-slider>
      </el-form-item>
      <el-form-item label="评分" prop="rate">
      <el-rate v-model="ruleForm.rate" show-text :colors="['#99A9BF', '#F7BA2A', '#FF9900']" style="margin-top:10px">
       </el-rate>
     </el-form-item>
			<el-form-item label="活动性质" prop="type">
       <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
       <el-checkbox-group v-model="ruleForm.type" @change="handleCheckedCitiesChange" :min="2"
       :max="3">
         <el-checkbox v-for="(type, index) in types" :label="type" name="type" :key="index"></el-checkbox>
					<!-- <el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox> -->
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio border label="线上品牌商赞助"></el-radio>
					<el-radio border label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click.native.prevent="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
  const typeOptions = ['美食/餐厅线上活动', '地推活动', '线下主题活动', '单纯品牌曝光'];
  export default {
    data() {
      var checkNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('人数不能为空'));
        }
        // setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value > 10) {
              callback(new Error('必须少于10人'));
            } else {
              callback();
            }
          }
        // }, 1000);
      };
      return {
        isIndeterminate:true,
        types: typeOptions,
        checkAll:false,
        ruleForm: {
          name: '',
          number:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          discount: 20,
          rate: 1,
          type: ['美食/餐厅线上活动','地推活动'],
          resource: '线上品牌商赞助',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          number:[
            { required: true, message: '请输入活动人数', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.ruleForm.type = val ? typeOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.types.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.types.length;
      },
      submitForm(formName) {
        // alert(this.ruleForm.rate)
        // alert(this.ruleForm.date1+' '+this.ruleForm.date2);
        this.$refs[formName].validate((valid) => {
          if (valid) {
             console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .el-slider{
    width:200px;
  }
</style>
