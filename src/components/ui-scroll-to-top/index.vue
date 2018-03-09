<template>
<div class="goto-top text-center" @click="gotoTop()">
  <i class="fa fa-angle-up"></i>
</div>
</template>

<style lang="scss" scoped>
.goto-top {
    position: fixed;
    right: 20px;
    bottom: 150px;
    width: 33px;
    height: 33px;
    background-color: rgba(255,255,255,.8);
    line-height: 32px;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    color: #aaa;
    border-radius: 1px;
    box-shadow: 0 0 15px 1px rgba(113, 106, 202, 0.2);

    &:hover {
        color: #666;
    }
}
</style>

<script>
export default {
  name: 'ui-scroll-to-top',

  methods: {
    gotoTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 400)
    }
  }
}
</script>
