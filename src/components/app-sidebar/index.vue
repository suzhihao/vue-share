<template>
<div class="sidebar">
  <ul>
    <li v-for="menu in menus">
      <!--directly link-->
      <router-link :to="menu.path" v-if="menu.path" :class="{'active': menu.active}">
        <i :class="menu.icon" v-if="menu.icon"></i>
        <span class="menu-title">{{menu.text}}</span>
      </router-link>

      <!--menu group-->
      <a href="javascript:;" v-if="!menu.path" @click="toggle(menu, $event)" :class="{'has-child': menu.children && menu.children.length > 0, 'active': isActive(menu), 'open': menu.open}">
        <i :class="menu.icon" v-if="menu.icon"></i>
        <span class="menu-title">{{menu.text}}</span>
        <span class="arrow"></span>
      </a>
      <ul v-if="menu.children && menu.children.length > 0">
        <li v-for="child in menu.children">
          <router-link :to="child.path" v-if="child.path">
            <i :class="child.icon" v-if="child.icon"></i>
            <span>{{child.text}}</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss" src="./style.scss"></style>
<script src="./component.js"></script>
