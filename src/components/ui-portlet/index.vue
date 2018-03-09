<template>
<div class="portlet">
  <div class="portlet-title">
    <slot name="header"></slot>
  </div>
  <div class="portlet-body" ref="body">
    <slot name="body"></slot>
  </div>
</div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./component.js"></script>
