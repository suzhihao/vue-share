<template>
<div class="page-404-full-page">
  <div class="row">
    <div class="col-md-24 page-404">
      <div class="number">
        404
      </div>
      <div class="details">
        <h3>Oops! 迷失了!</h3>
        <p>
          您请求的页面不存在！<br>
          <router-link to="/" v-if="!user.account"> 返回首页 </router-link>
          <router-link to="/search/advanced" v-if="user.account"> 返回首页 </router-link>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js">
</script>
