<template>
  <ul class="main-nav p-0 float-right mt-5 mr-5">
    <li>
      <router-link to="/who-we-are/">Who We Are</router-link>
    </li>
    <li>
      <router-link to="/what-we-do/">What We Do</router-link>
    </li>
    <li>
      <router-link to="/our-vision/">Our Vision</router-link>
    </li>
    <li>
      <router-link to="/people/">People</router-link>
    </li>
    <li>
      <router-link to="/get-in-touch/">Get In Touch</router-link>
    </li>
  </ul>
</template>

<style lang="scss">
.main-nav li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      color: #666;
      transition: 0.3s ease;
    }
  }
}
</style>
