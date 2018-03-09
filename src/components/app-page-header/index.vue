<template>
<div class="row">
  <div class="col-xs-24" v-if="showTitle">
    <h3 class="page-title">
      {{title}} <small>{{ subtitle }}</small>
		</h3>
  </div>
  <div class="col-xs-24 relative" v-if="showBreadCrumb">
    <ol class="breadcrumb">
      <li v-for="item in breadcrumb">
        <i :class="item.icon" v-if="item.icon"></i>
        <span>{{ item.text }}</span>
      </li>
    </ol>
  </div>
</div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
<script src="./component.js"></script>
