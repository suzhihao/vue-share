<template>
<el-tooltip effect="dark" content="切换全屏模式" placement="top">
  <a @click="toggle()" href="javascript:;" :class="['fa', state ? 'fa-compress' : 'fa-expand']"></a>
</el-tooltip>
</template>

<script>
export default {
  name: 'ui-portlet-fullscreen-btn-xs',
  data() {
    return {
      state: false
    }
  },
  methods: {
    toggle() {
      let $target = $(this.$el)
      let $portlet = $target.closest('.portlet')
      if ($target.length > 0 && $portlet.length > 0) {
        this.state = !this.state
        if (this.state) {
          $portlet.addClass('portlet-fullscreen')
          $('body').addClass('page-portlet-fullscreen')
        } else {
          $portlet.removeClass('portlet-fullscreen')
          $('body').removeClass('page-portlet-fullscreen')
        }
      }
    }
  }
}
</script>
