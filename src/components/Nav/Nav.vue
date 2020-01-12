<template>
  <nav
    class="navbar navbar-expand navbar-dark bg-none main-nav float-right mt-4"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample02"
      aria-controls="navbarsExample02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample02">
      <ul class="navbar-nav mr-auto">
        <li
          v-bind:class="[
            'nav-item',
            this.$route.name === 'whoweare' ? 'active' : ''
          ]"
        >
          <router-link class="nav-link" to="/who-we-are/"
            >Who We Are</router-link
          >
        </li>
        <li
          v-bind:class="[
            'nav-item',
            this.$route.name === 'whatwedo' ? 'active' : ''
          ]"
        >
          <router-link class="nav-link" to="/what-we-do/"
            >What We Do</router-link
          >
        </li>
        <li
          v-bind:class="[
            'nav-item',
            this.$route.name === 'ourvision' ? 'active' : ''
          ]"
        >
          <router-link class="nav-link" to="/our-vision/"
            >Our Vision</router-link
          >
        </li>
        <li
          v-bind:class="[
            'nav-item',
            this.$route.name === 'people' ? 'active' : ''
          ]"
        >
          <router-link class="nav-link" to="/people/">People</router-link>
        </li>
        <li
          v-bind:class="[
            'nav-item',
            this.$route.name === 'getintouch' ? 'active' : ''
          ]"
        >
          <router-link class="nav-link" to="/get-in-touch/"
            >Get In Touch</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss">
.main-nav li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  a {
    color: #fff !important;
    text-decoration: none;
    transition: 0.3s ease;
    padding: 0.5rem 0 !important;
    &:hover {
      color: #666 !important;
      transition: 0.3s ease;
    }
  }
  &.active {
    a {
      color: #666 !important;
      border-bottom: 3px solid #666;
    }
  }
}
</style>
