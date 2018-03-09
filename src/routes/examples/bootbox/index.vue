<template>
<div class="row">
  <div class="col-xs-24">
    <div class="note note-info">
      <h4 class="block">
        <a href='http://bootboxjs.com/documentation.html#bb-confirm-dialog' target="_blank"> 文档地址</a>
      </h4>
    </div>
  </div>
  <div class="col-xs-24">
    <button class="btn btn-primary" @click="showAlert()">Alert</button>
    <button class="btn btn-primary" @click="showComfirm()">Confirm</button>
  </div>
</div>
</template>

<script>
import uiService from '../../../core/ui-service'
export default {
  methods: {
    showAlert() {
      uiService.bootbox.alert('Hello world!')
    },
    showComfirm() {
      uiService.bootbox.confirm('你确定需要删除该数据?', result => {
        if (result) {
          alert('你选择了【是】')
        } else {
          alert('你选择了【否】')
        }
      })
    }
  }
}
</script>
