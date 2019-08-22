<template>
  <section>
    <el-row style="margin-bottom: 12px">
      <search-input placeholder="请输入产品ID/IMEI" v-model="searchValue" @on-search="getTableData(1)"></search-input>
    </el-row>
    <el-table ref="multipleTable" :data="tableData" border stripe max-height="650" height="650"
              style="width: 100%;text-align: center;" :row-class-name="tableRowClassName" tooltip-effect="dark"
              @selection-change="handleSelectionChange">
      <el-table-column fixed type="selection" width="65">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="150" sortable>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150" sortable>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="150" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class='btm-action'>
      <el-pagination
        v-if='paginations.total > 0'
        class='pagination'
        :current-page='paginations.current_page'
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total"
        @current-change='handleCurrentChange'
        @size-change='handleSizeChange'>
      </el-pagination>
    </el-col>
    <!--<div v-if="tableData && tableData.length !== 0" style="text-align: center">-->
    <!--<pagination :page="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"></pagination>-->
    <!--</div>-->
    <!-- <el-col :span="24" class="toolbar" style="width: 80%;">
            <el-button type="danger" @click="batchRemove" :disabled="this.multipleSelection.length===0">批量删除</el-button>
          <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :total="total" style="float:right;"></el-pagination>
        </el-col> -->
  </section>
</template>
<script>
  // import {getUserListPage, removeUser, batchRemoveUser, editUser, addUser} from '../../api/api';
  // import SearchInput from '../../components/global/SearchInput'
  // import Pagination from '../../components/global/BasePagination'

  export default {
    name: 'Table',
    components: {},
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1518 弄',
        province: '江苏省',
        city: '南京市',
        zip: 210000
      }
      const pageSizes = [{
        value: 10,
        label: '10页/条'
      }, {
        value: 20,
        label: '20页/条'
      }, {
        value: 30,
        label: '30页/条'
      }, {
        value: 40,
        label: '40页/条'
      }]
      return {
        multipleSelection: [],
        total: 0,
        tableData: Array(20).fill(item),
        searchValue: '@',
        page: {
          pageCurrent: 1,
          pageSize: 10,
          pageTotal: 0,
          layout: 'total, sizes, pager,prev, next',
          prevDisabled: false,
          nextDisabled: false,
          pageSizes
        },
        // 需要给分页组件传的信息
        paginations: {
          current_page: 1,
          total: 0,
          page_size: 3,
          page_sizes: [3, 9, 12, 24],
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      }
    },
    created () {
      this.paginations.total = this.tableData.length
      this.page.pageTotal = this.tableData.length
    },
    methods: {
      // 性别显示转换
      formatSex: function (row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      },
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'warning-row'
        } else if (rowIndex === 2) {
          return 'success-row'
        }
        return ''
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      // 批量删除
      batchRemove: function () {
        // var ids = this.sels.map(item => item.id).toString();
        // this.$confirm('确认删除选中记录吗？', '提示', {
        //   type: 'warning'
        // }).then(() => {
        //   this.listLoading = true;
        //   //NProgress.start();
        //   let para = {ids: ids};
        //   batchRemoveUser(para).then((res) => {
        //     this.listLoading = false;
        //     //NProgress.done();
        //     this.$message({
        //       message: '删除成功',
        //       type: 'success'
        //     });
        //     this.getUsers();
        //   });
        // }).catch(() => {
        // });
      },
      handleClick (row) {

      },
      handleSizeChange (val) {
        console.log('handleSizeChange')
        // this.page.pageSize = val
        // this.getTableData(1)
      },
      handleCurrentChange (val, jumper = false) {
        console.log('handleCurrentChange')
        // this.getTableData(val)
      },
      getTableData (val) {
        console.log(val, 'getTableData')
      }
    }
  }
</script>
<style scoped>
  .btm-action {
    margin: 10px 0px;
    text-align: center;
  }

  .pagination {
    display: inline-block;
  }
</style>
