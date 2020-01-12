<template>
  <div class="col-12 p-0">
    <div class="row banner">
      <div class="col-12 col-md-6 p-5">
        <img src="@/assets/vision.svg" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <h1>OUR VISION</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 align-self-center">
        <font-awesome-icon icon="align-left" />
      </div>
      <div class="col-12 col-md-8 p-5 text-left">
        <p>
          To be the most cost effective, quality concerned and creative
          communication company, offering a fully integrated service to all
          clients.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ourvision",
  data() {
    return { title: "our vision" };
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-family: "Oswald", sans-serif;
  color: #2b2b2b;
}
p {
  color: #fff;
  // font-family: "Playfair Display", serif;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
}

.banner {
  background: #fff;
  img {
    -webkit-filter: grayscale(90%);
    filter: grayscale(90%);
  }
}
</style>
