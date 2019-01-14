<template>
  <div>
    <el-input v-model="searchValue" :placeholder="placeholder" class="search-input" @keydown.enter.native="onSearch">
      <el-button slot="append" icon="aep-icon icon-sousuo icon-color" @click="onSearch"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        searchValue: this.value
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      placeholder: String,
      value: String
    },
    watch: {
      'value': function () {
        this.searchValue = this.value
      },
      'searchValue': function () {
        this.$emit('change', this.searchValue)
      }
    },
    methods: {
      onSearch() {
        this.$emit('change', this.searchValue)
        this.$emit('on-search')
        // this.$emit('on-search', this.searchValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-input {
    border: 0px;
    width: 260px;
    height: 30px;
    background: transparent;
    border-radius: 15px;
    font-size: 12px;
    line-height: normal; //!覆盖base.js line-height：30px
  }

  .search-input:focus {
    outline: none;
  }

  .search-input::placeholder {
    color: lightgrey;
  }

  .el-input {
    & /deep/ {
      width: 260px;
      height: 30px;
      .el-input__inner {
        background: #FFFFFF;
        border-top: 1px solid #2DC6F6;
        border-left: 1px solid #2DC6F6;
        border-bottom: 1px solid #2DC6F6;
        border-right-width: 0px;
        border-radius: 23px 0px 0px 23px;
        margin-right: -17px;
        width: 245px;
        height: 32px;
        line-height: 30px;
      }
      .el-input-group__append {
        background: #2DC6F6;
        border-radius: 23px;
        border: 0px;
        width: 32px;
        height: 30px;
        padding: 0px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
      .el-button {
        border: 0px;
        padding: 0px;
        margin: 0px; //!水平居中
        vertical-align: middle; //!ie垂直居中
      }
      .el-button--small {
        height: 32px;
        width: 32px;
        .icon-color {
          font-size: 16px;
          color: #FFFFFF;
        }
      }
    }
  }
</style>
