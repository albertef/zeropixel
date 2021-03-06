import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue.js";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  data: { loading: false },
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  app.loading = true;
  next();
});

router.afterEach((to, from, next) => {
  setTimeout(() => (app.loading = false), 2500); // timeout for demo purposes
  next();
});
