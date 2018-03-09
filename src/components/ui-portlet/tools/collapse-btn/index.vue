<template>
<el-tooltip class="item" effect="dark" content="展开/收起" placement="top">
  <a href="javascript:;" :class="['fa', collapse ? 'fa-chevron-up' : 'fa-chevron-down']" @click="toggle()"></a>
</el-tooltip>
</template>
<script>
export default {
  name: 'ui-portlet-collapse-btn',
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    toggle() {
      let $portletBody = $(this.$el).closest('.portlet').find('.portlet-body')
      if ($portletBody.length > 0) {
        this.collapse = !this.collapse
        if (this.collapse) {
          $portletBody.slideUp(400)
        } else {
          $portletBody.slideDown(400)
        }
      }
    }
  }
}
</script>
