webpackJsonp([7],{"+b26":function(e,r){},"4+AD":function(e,r,t){var l=t("8leu");l(l.S,"Number",{isInteger:t("YGy9")})},"4Xi4":function(e,r,t){e.exports={default:t("6zNI"),__esModule:!0}},"6zNI":function(e,r,t){t("4+AD"),e.exports=t("Rv9F").Number.isInteger},VX5i:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t("4Xi4"),o=t.n(l),a=["美食/餐厅线上活动","地推活动","线下主题活动","单纯品牌曝光"],n={components:{BackTop:t("uIIB").default},data:function(){return{isIndeterminate:!0,types:a,checkAll:!1,ruleForm:{name:"",number:"",region:"",date1:"",date2:"",delivery:!1,discount:20,rate:1,type:["美食/餐厅线上活动","地推活动"],resource:"线上品牌商赞助",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],number:[{required:!0,message:"请输入活动人数",trigger:"blur"},{validator:function(e,r,t){if(!r)return t(new Error("人数不能为空"));o()(r)?r>10?t(new Error("必须少于10人")):t():t(new Error("请输入数字值"))},trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},mounted:function(){},methods:{handleCheckAllChange:function(e){this.ruleForm.type=e?a:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var r=e.length;this.checkAll=r===this.types.length,this.isIndeterminate=r>0&&r<this.types.length},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields()}}},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-container"},[t("el-row",[t("el-col",{attrs:{span:18}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,inline:!1,"label-width":"90px","label-position":"right","status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动人数",prop:"number"}},[t("el-input",{model:{value:e.ruleForm.number,callback:function(r){e.$set(e.ruleForm,"number",e._n(r))},expression:"ruleForm.number"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"折扣",prop:"discount"}},[t("el-slider",{staticStyle:{width:"80%"},attrs:{"show-input":""},model:{value:e.ruleForm.discount,callback:function(r){e.$set(e.ruleForm,"discount",r)},expression:"ruleForm.discount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"评分",prop:"rate"}},[t("el-rate",{staticStyle:{"margin-top":"10px"},attrs:{"show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:e.ruleForm.rate,callback:function(r){e.$set(e.ruleForm,"rate",r)},expression:"ruleForm.rate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(r){e.checkAll=r},expression:"checkAll"}},[e._v("全选\n          ")]),e._v(" "),t("el-checkbox-group",{attrs:{min:2,max:3},on:{change:e.handleCheckedCitiesChange},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},e._l(e.types,function(e,r){return t("el-checkbox",{key:r,attrs:{label:e,name:"type"}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{border:"",label:"线上品牌商赞助"}}),e._v(" "),t("el-radio",{attrs:{border:"",label:"线下场地免费"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{nativeOn:{click:function(r){return r.preventDefault(),e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),t("back-top",{attrs:{visibilityHeight:120}})],1)},staticRenderFns:[]};var s=t("C7Lr")(n,i,!1,function(e){t("+b26")},"data-v-024e232a",null);r.default=s.exports},YGy9:function(e,r,t){var l=t("PUvy"),o=Math.floor;e.exports=function(e){return!l(e)&&isFinite(e)&&o(e)===e}}});