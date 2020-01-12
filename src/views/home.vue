<template>
  <div class="home">
    <Bgvideo></Bgvideo>
  </div>
</template>

<script>
import Bgvideo from "@/components/Bgvideo/Bgvideo.vue";
export default {
  name: "home",
  components: {
    Bgvideo
  },
  data() {
    return { msg: "Welcome to Your Vue.js App" };
  }
};
</script>

<style scoped></style>
