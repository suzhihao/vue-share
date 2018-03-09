<!-- Created by zhihao_su on 2017/11/30. -->
<template>
  <div class="block-spinner">
    <div class="block-spinner-bar">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-loading-spinner'
  }
</script>
<style lang="scss">
  .block-spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }
  .block-spinner-bar {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    width: 100%;
    height: 20px;
    text-align: center;

    .bounce1 {
      animation-delay: -.32s;
    }

    .bounce2 {
      animation-delay: -.16s;
    }

    > div {
      margin: 0 2px;
      width: 20px;
      height: 20px;
      background: #ffc000;
      border-radius: 100% !important;
      display: inline-block;
      animation: bounceDelay 1.4s infinite ease-in-out;
      animation-fill-mode: both;
    }

  }

  @keyframes bounceDelay {
    0%, 100%, 80% {
      transform: scale(0)
    }

    40% {
      transform: scale(1)
    }
  }
</style>