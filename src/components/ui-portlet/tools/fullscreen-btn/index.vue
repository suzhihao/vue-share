<template>
<button class="btn default btn-xs red-stripe" @click="toggle()"><i :class="['fa', state ? 'fa-compress' : 'fa-expand']"></i> {{state ? '退出全屏' : '全屏模式'}}</button>
</template>

<script>
export default {
  name: 'ui-portlet-fullscreen-btn',
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
