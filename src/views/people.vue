<template>
  <div class="col-12 p-0">
    <div class="row banner">
      <div class="col-12 col-md-6 p-5">
        <img src="@/assets/people.svg" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <h1>PEOPLE</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 align-self-center">
        <font-awesome-icon icon="align-left" />
      </div>
      <div class="col-12 col-md-8 p-5 text-left">
        <p>
          Behind the efficient service we offer, there is a strong and dynamic
          team with outstanding talent. Our Digital Marketing Managers, graphic
          designers, Film Makers, Photographers, public relations, event
          management and IT professionals are outstanding in their respective
          fields, providing a strong infrastructure backed up by administrative
          and financial management skills gained over many years.
        </p>
        <p>
          We have the knowledge and expertise and infrastructure to take your
          organization through the whole process of creating an identity and
          establishing a strong brand and awareness.
        </p>
        <p>
          Zro Pixel draws from the experiences of a variety of experts in the
          communications field on a freelance basis. These include graphic
          designers, language editors, journalists, photographers, copy writers,
          Photographers and event management specialists as well as IT
          Specialists. We employ sub-contractors and associates on a freelance
          and project-to-project basis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "people",
  data() {
    return { title: "people" };
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
