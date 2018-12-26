<template>
  <div class="pagination">
    <span class="pagination_total" v-if="page.layout.includes('total')">共 {{page.pageTotal}} 条</span>
    <span class="pagination_sizes" v-if="page.layout.includes('sizes')">
        <el-select size="mini" v-model="page.pageSize" @change="onChangeSize">
          <el-option v-for="item in page.pageSizes" :key="item.label" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </span>
    <button
      type="button"
      class="btn-prev"
      :disabled="page.pageCurrent === 1"
      @click="onPrev">
      <i class="el-icon el-icon-arrow-left"></i>
    </button>
    <span class="pagination_current">
        {{page.pageCurrent}}
    </span>
    <button
      type="button"
      class="btn-next"
      :disabled="page.nextDisabled"
      @click="onNext">
      <i class="el-icon el-icon-arrow-right"></i>
    </button>
    <button
      class="btn-first"
      :disabled="page.pageCurrent === 1"
      @click="onJump(1)">
      回到首页
    </button>
  </div>
</template>

<script>
  export default {
    name: 'BasePagination',
    data() {
      return {}
    },
    props: ['page'],
    mounted() {

    },
    watch: {
      'page.pageTotal': function (val) {
        // console.log('page.pageTotal')
        // this.page.pageTotal = val
      }
    },
    methods: {
      onChangeSize(val) {
        this.$emit('size-change', val)
      },
      onPrev() {
        let pageCurrent = this.page.pageCurrent - 1
        this.$emit('current-change', pageCurrent)
      },
      onNext() {
        let pageCurrent = this.page.pageCurrent + 1
        this.$emit('current-change', pageCurrent)
      },
      onJump(val) {
        // 参数1：当前页；参数2：是否跳页
        this.$emit('current-change', val, true)
      }
    }
  }
</script>

<style scoped lang="scss">
  .pagination button {
    border: none;
    padding: 0 6px;
  }

  .pagination button:hover {
    color: #2DC6F6;
  }

  .pagination button:focus {
    outline: 0;
  }

  .pagination button:disabled {
    color: #c0c4cc;
    background-color: #fff;
    cursor: not-allowed;
  }

  .pagination .btn-prev, .pagination .btn-next {
    background: center center no-repeat;
    background-size: 16px;
    background-color: #fff;
    cursor: pointer;
    margin: 0;
    color: #303133;
  }

  .pagination .btn-prev .el-icon, .pagination .btn-next .el-icon {
    display: block;
    font-size: 12px;
    font-weight: bold;
  }

  .pagination span:not([class*=suffix]), .pagination button {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .pagination_total {
    margin-right: 10px;
    font-weight: normal;
    color: #606266;
  }

  .pagination_sizes {
    width: 100px;
    margin: 0 5px;
  }

  .el-select-dropdown__item.selected {
    color: #2DC6F6;
    font-weight: bold;
  }

  .pagination {
    white-space: nowrap;
    color: #303133;
    font-weight: 700;
    text-align: center;
    padding: 20px 5px 5px 5px;
  }

  .pagination_current {
    padding: 0 4px;
    color: #fff;
    background-color: #2dc6f6;
    border-radius: 100%;
    min-width: 28px !important;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    text-align: center;
  }

  .btn-first {
    background-color: #fff;
    color: #606266;
  }

  .btn-first:not(:disabled):hover {
    color: #2dc6f6;
    font-weight: 700;
  }
</style>
