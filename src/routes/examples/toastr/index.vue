<template>
<div class="row">
  <div class="col-xs-24">
    <button class="btn btn-success" @click="showSuccess()">成功</button>
    <button class="btn btn-info" @click="showInfo()">提醒</button>
    <button class="btn btn-warning" @click="showWarning()">警告</button>
    <button class="btn btn-danger" @click="showError()">错误</button>
  </div>
</div>
</template>

<script>
import uiService from '../../../core/ui-service'
export default {
  methods: {
    showSuccess() {
      uiService.toastr.success('这个是成功提示!', '操作成功')
    },
    showInfo() {
      uiService.toastr.info('这个是提醒!', '提醒')
    },
    showWarning() {
      uiService.toastr.warning('这个是警告!', '警告')
    },
    showError() {
      uiService.toastr.error('这个是错误!', '错误')
    }
  }
}
</script>
