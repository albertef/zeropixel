<template>
  <div id="app" class="container-fluid">
    <Header></Header>
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <transition name="moveInUp">
      <router-view class="router-view" />
    </transition>
    <Footer></Footer>
    <Loader v-if="$root.loading"></Loader>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Loader from "./components/Loader/Loader.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: #000;
  svg {
    position: relative;
    z-index: 3;
  }
  .router-view {
    position: relative;
    z-index: 2;
  }
  .moveInUp-enter-active {
    animation: fadeIn 0.3s ease-in;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
