webpackJsonp([18],{"45GI":function(e,t){},zEZh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"Table",components:{},data:function(){return{multipleSelection:[],total:0,tableData:Array(20).fill({date:"2016-05-02",name:"王小虎",sex:1,address:"上海市普陀区金沙江路 1518 弄",province:"江苏省",city:"南京市",zip:21e4}),searchValue:"@",page:{pageCurrent:1,pageSize:10,pageTotal:0,layout:"total, sizes, pager,prev, next",prevDisabled:!1,nextDisabled:!1,pageSizes:[{value:10,label:"10页/条"},{value:20,label:"20页/条"},{value:30,label:"30页/条"},{value:40,label:"40页/条"}]},paginations:{current_page:1,total:0,page_size:3,page_sizes:[3,9,12,24],layout:"total, sizes, prev, pager, next, jumper"}}},created:function(){this.paginations.total=this.tableData.length,this.page.pageTotal=this.tableData.length},methods:{formatSex:function(e,t){return 1===e.sex?"男":0===e.sex?"女":"未知"},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 0===t?"warning-row":2===t?"success-row":""},handleSelectionChange:function(e){this.multipleSelection=e},batchRemove:function(){},handleClick:function(e){},handleSizeChange:function(e){console.log("handleSizeChange")},handleCurrentChange:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("handleCurrentChange")},getTableData:function(e){console.log(e,"getTableData")}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-row",{staticStyle:{"margin-bottom":"12px"}},[a("search-input",{attrs:{placeholder:"请输入产品ID/IMEI"},on:{"on-search":function(t){return e.getTableData(1)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.tableData,border:"",stripe:"","max-height":"650",height:"650","row-class-name":e.tableRowClassName,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{fixed:"",type:"selection",width:"65"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"150",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"150",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"150","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"btm-action",attrs:{span:24}},[e.paginations.total>0?a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.paginations.current_page,"page-sizes":e.paginations.page_sizes,"page-size":e.paginations.page_size,layout:e.paginations.layout,total:e.paginations.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}):e._e()],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(l,n,!1,function(e){a("45GI")},"data-v-b6ba3d90",null);t.default=o.exports}});