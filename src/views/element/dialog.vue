<template>
  <el-dialog title="详情" :visible="dialogVisible" width="880px" @close="onClose">
    <div>
      <el-row class="table-title">
        用户信息
      </el-row>
      <el-row class="table-content">
        <el-form label-width="110px" label-position="left" class="table-form">
          <el-col :span="6" v-for="(item, index) in userInfo" :key="index">
            <el-form-item :class="item.classType">
              <span slot="label" class="item-label">{{item.label}}</span>
              <el-tooltip :disabled="!data[item.value]" :content="data[item.value]" placement="top">
                <span v-if="item.label" class="item-value">{{data[item.value] | filterValue}}</span>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <el-row class="table-title">
        产品信息
      </el-row>
      <el-row class="table-content">
        <el-form label-width="110px" label-position="left" class="table-form">
          <el-col :span="6" v-for="(item, index) in productInfo" :key="index">
            <el-form-item :class="item.classType">
              <span slot="label" class="item-label">{{item.label}}</span>
              <el-tooltip :disabled="!data[item.value]" :content="data[item.value]" placement="top">
                <span v-if="item.label" class="item-value">{{data[item.value] | filterValue}}</span>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <el-row class="table-title">
        设备信息
      </el-row>
      <el-row class="table-content">
        <el-form label-width="110px" label-position="left" class="table-form">
          <el-col :span="6" v-for="(item, index) in deviceInfo" :key="index">
            <el-form-item :class="item.classType">
              <span slot="label" class="item-label">{{item.label}}</span>
              <el-tooltip :disabled="!data[item.value]" :content="data[item.value]" placement="top">
                <span v-if="item.label" class="item-value">{{data[item.value] | filterValue}}</span>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false" class="btn_cancel">关 闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'dialogDemo',
    data () {
      return {
        dialogVisible: true,
        data: {userId: '122wwwwwwwwwwwwwwwwwwww2'},
        userInfo: [
          {label: '用户ID', value: 'userId'},
          {label: '用户账号', value: 'userAccount'},
          {label: '手机号', value: 'userPhone'},
          {label: '地区码', value: 'areaNo'},
          {label: '地区名', value: 'areaName'},
          {label: '创建时间', value: 'userCreateTime'},
          {label: '修改时间', value: 'userUpdateTime'},
          {label: '删除时间', value: 'userDeleteTime'}
        ],
        productInfo: [
          {label: '产品ID', value: '22'},
          {label: '产品名称', value: '2'},
          {label: '产品所属的用户ID', value: 'ss', classType: 'item-label_long'},
          {label: '产品型号', value: '2'},
          {label: '产品类型', value: ''},
          {label: '产品接入方式', value: ''},
          {label: '设备识别类型（IMEI/MAC）', value: '', classType: 'item-label_long'},
          {label: '配网方式', value: ''},
          {label: '品牌', value: ''},
          {label: '模组', value: ''},
          {label: '厂商名称', value: ''},
          {label: '创建时间', value: ''},
          {label: '修改时间', value: ''},
          {label: '删除时间', value: ''},
          {label: '', value: ''},
          {label: '', value: ''}
        ],
        deviceInfo: [
          {label: '设备识别号（IMEI/MAC）', value: '', classType: 'item-label_long'},
          {label: '设备ID（设备唯一标识）', value: '22', classType: 'item-label_long'},
          {label: '设备名称', value: '2'},
          {label: '设备所属的产品ID', value: 'ss', classType: 'item-label_long'},
          {label: '固件版本', value: '2'},
          {label: '创建时间', value: ''},
          {label: '修改时间', value: ''},
          {label: '删除时间', value: ''},
          {label: '设备状态', value: ''},
          {label: '设备当前状态', value: ''},
          {label: '设备最近一次上线时间戳', value: '', classType: 'item-label_long'},
          {label: '设备最近一次下线时间戳', value: '', classType: 'item-label_long'}
        ]
      }
    },
    filters: {
      filterValue (value) {
        if (value) {
          return value
        } else {
          return '- -'
        }
      }
    },
    methods: {
      onClose (type = 'dismiss') {
        this.dialogVisible = false
        this.$emit('on-close', {
          type: type
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .table-title {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .el-dialog__wrapper {
    & /deep/ {
      .el-dialog__body {
        padding: 0 20px 10px;
      }
    }
  }

  .table-content {
    border: 1px solid #ccc;
    border-bottom: 0;
    border-right: 0;
  }

  .el-form-item {
    margin-bottom: 0;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 13px;
  }

  .table-content > > > .el-form--label-left .el-form-item__label {
    background-color: #f6f7f9;
    text-align: center;
    height: 54px;
    padding: 10px 6px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .table-content > > > .item-label_long .el-form-item__label {
    /*line-height: 20px;*/
  }

  .table-content > > > .el-form-item__content {
    border-left: 1px solid #ccc;
    text-align: center;
    height: 54px;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      line-height: 22px;
      width: 100%;
      display: inline-block;
      white-space: nowrap;
    }
    /*限制文本行数*/
    @supports (-webkit-line-clamp: 2) {
      span {
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
</style>
