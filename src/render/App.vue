<template>
  <a-layout class="app-container">
    <a-layout-sider  class="app-aside">
      <a-layout-header class="app-logo">Lucifer</a-layout-header>
      <router-link to="/">首页</router-link>
      <router-link to="/about">About</router-link>
    </a-layout-sider>

    <a-layout class="app-body">
      <a-layout-header class="app-header">Hello Vue 3.0</a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="app-footer">Power by Lucifer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}

.app-logo {
  background: #ddd;
  display: flex;
  align-items: center;
}

.app-header {
  background: #ddd;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.app-aside {
  background: #eee;
  width: 50px;

  a {
    color: #999;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  a.router-link-active {
    background: #ddd;
  }
}

.app-footer {
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
