<template>
<div class="row">
  <div class="col-xs-24">
    <div class="note note-success">
      <h4 class="block">简单说明</h4>
      <p>1. 开启Dialog(3个参数): uiService.showDialog([dialog组件(必填)], [model(可选)], [bootstrap modal option(可选)])</p>
      <p>2. showDialog返回Promise</p>
      <p>3. 在dialog组件里面可以通过 this.$promise进行resolve或者reject</p>
    </div>
  </div>
  <div class="col-xs-24">
    <button class="btn btn-primary" @click="open()">打开对话框</button>
  </div>
</div>
</template>

<script>
import dialog1 from './components/dialog-1'
import uiService from '../../../core/ui-service'

export default {
  name: 'dialog',

  methods: {
    open() {
      uiService
        .showDialog(dialog1, {
          message: 'initial message',
          message2: '测试一下数据'
        })
        .then(result => {
          console.log(result) // eslint-disable-line
        })
    }
  }
}
</script>
