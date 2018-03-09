<template>
<div class="input-group search-form">
  <input type="text" class="form-control input tt-input" v-placeholder="'请输入企业名进行公司查询'" ref="key" @keyup.enter="handleEnter" v-model="searchStr">
  <div class="input-group-addon" @click="handleSearch"><i class="fa fa-search"></i></div>
</div>
</template>
<style lang="scss" src="./style.scss" scoped></style>

<script src="./component.js"></script>
