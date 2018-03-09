<template>
<div>
  <app-header />
  <div class="container-fluid page-content">
    <div :class="{row: true, 'page-container': true, 'sidebar-collapsed': collapsed, 'sidebar-mini': mini}">
      <div :class="{'sidebar-container': true, 'sidebar-fixed': fixed}" ref="sidebarContainer">
        <div class="toggle clearfix" ref="sidebarToggleContainer">
          <span class="icon-pin" @click="togglePin" :title="fixed?'取消固定':'固定菜单'"></span>
        </div>
        <div class="sidebar-container-wrapper">
          <app-sidebar ref="sidebar" />
        </div>
      </div>
      <div class="content-container">
        <div class="content-container-wrapper">
          <div class="content-container-inner">
            <app-page-header></app-page-header>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
  <!-- <ui-scroll-to-top /> -->
</div>
</template>

<style scoped lang="scss" src="./style.scss"></style>
<script src="./component.js"></script>
