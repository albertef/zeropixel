<template>
  <div id="app" class="container-fluid">
    <Header></Header>
    <Bgvideo></Bgvideo>
    <router-view class="router-view" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Bgvideo from "./components/Bgvideo/Bgvideo.vue";

export default {
  name: "app",
  components: {
    Header,
    Bgvideo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view {
  position: relative;
  z-index: 2;
}
</style>
