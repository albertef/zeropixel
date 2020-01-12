<template>
  <div class="row header-container">
    <div class="col text-left p-0 main-header">
      <router-link to="/">
        <img alt="Zropixel Logo" src="../../assets/logo.png" class="p-3 logo" />
      </router-link>
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";
export default {
  name: "nav",
  components: {
    Nav
  }
};
</script>

<style>
.logo {
  max-width: 100px;
  filter: invert(100%);
}
.main-header {
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
}
.header-container {
  z-index: 3;
}
</style>
