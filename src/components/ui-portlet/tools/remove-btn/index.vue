<template>
<el-tooltip effect="dark" content="移除" placement="top">
  <a href="javascript:;" class="fa fa-remove" @click="remove()"></a>
</el-tooltip>
</template>
<script>
export default {
  name: 'ui-portlet-remove-btn',
  methods: {
    remove() {
      $(this.$el).closest('.portlet').fadeOut(400, function() {
        $(this).remove()
      })
    }
  }
}
</script>
