<template>
  <div id="index">
    <keep-alive include="Home">
     <router-view ></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "index",
  components: {
    MainTabbar,
  },
};
</script>
<style>
@import url("../assets/css/base.css");
</style>