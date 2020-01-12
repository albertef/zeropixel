<template>
  <div class="col-12 p-0">
    <div class="row banner">
      <div class="col-12 col-md-6 p-5">
        <img src="@/assets/about.svg" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <h1>WHO WE ARE</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 align-self-center">
        <font-awesome-icon icon="align-left" />
      </div>
      <div class="col-12 col-md-8 p-5 text-left">
        <p>
          Zro Pixel is a Tech company based in Dubai, UAE specializing in the
          fields of Marketing, Information Technology Services and
          Photography/Filming.
        </p>
        <p>
          Our experienced staff of professionals has worked with array of
          Digital platforms, Applications Softwares, and tools in the course of
          our various projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whoweare",
  data() {
    return { title: "Who We Are" };
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
