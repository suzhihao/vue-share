<template>
<div class="modal fade" ref="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <div>
          now: {{ message }} <button @click="setNow()" class="btn btn-warning">Set Time</button>
        </div>
        <div>
          message2: {{ message2 }}
        </div>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <p>这是个很长的dialog</p>
        <div>
          <button class="btn btn-primary" @click="showDialog()">打开对话框</button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="close()">Javascript关闭</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import dialog2 from './dialog-2.vue'
import uiService from '../../../../core/ui-service'

export default {
  name: 'test-dialog',

  mounted() {
    console.log('mounted') // eslint-disable-line
    console.log(this.message, this.message2) // eslint-disable-line

    $(this.$el).on('hidden.bs.modal', () => {
      this.$promise.resolve({
        message: '测试一下resolve'
      })
    })
  },

  methods: {
    close() {
      this.$modal.modal('hide')
    },
    setNow() {
      this.message = new Date()
    },
    showDialog() {
      uiService.showDialog(dialog2)
    }
  }

}
</script>
