<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="javascript:;" class="navbar-toggle hidden-sm" data-toggle="collapse" data-target="#navbar">
        <i class="fa fa-ellipsis-v"></i>
      </a>
      <a href="javascript:;" class="navbar-toggle" @click="collapseSidebar()">
        <i class="fa fa-bars"></i>
      </a>
      <a class="navbar-brand" href="javascript:;">Pikachu</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <!--PC版展开收起菜单-->
        <li>
          <a href="javascript:;" @click="toggleSidebar()" class="hidden-xs sidebar-toggle"><i class="fa fa-bars"></i></a>
        </li>
        <!--顶部搜索条-->
        <li>
          <app-top-search-bar></app-top-search-bar>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" ref="drp3">
            <span class="icon-user"></span>
            <span>{{user.userName}}</span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu top-right-caret">
            <li><a href="javascript:;" @click="changePass()"><i class="icon-key"></i>修改密码</a></li>
            <li class="divider"></li>
            <li><a href="javascript:;" @click="logout()"><i class="icon-power"></i>退出系统</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped lang="scss" src="./style.scss"></style>
<script src="./component.js"></script>
