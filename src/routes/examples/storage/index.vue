<template>
<div class="row">
  <div class="col-xs-24">
    <h1>localStorage: {{localStorageData}}</h1>
    <button class="btn btn-success" @click="setLocalStorage()">SetObject</button>
    <button class="btn btn-success" @click="getLocalStorage()">GetObject</button>
    <button class="btn btn-success" @click="clearLocalStorage()">Clear</button>
  </div>
  <div class="col-xs-24">
    <h1>sessionStorage: {{sessionStorageData}}</h1>
    <button class="btn btn-success" @click="setSessionStorage()">SetObject</button>
    <button class="btn btn-success" @click="getSessionStorage()">GetObject</button>
    <button class="btn btn-success" @click="clearSessionStorage()">Clear</button>
  </div>

  <div class="col-xs-24">
    <h1>cookieStorage: {{cookieStorageData}}</h1>
    <button class="btn btn-success" @click="setCookieStorage()">SetObject</button>
    <button class="btn btn-success" @click="getCookieStorage()">GetObject</button>
    <button class="btn btn-success" @click="clearCookieStorage()">Clear</button>
  </div>
</div>
</template>

<script src="./component.js"></script>
