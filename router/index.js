import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import home from "@/views/home.vue";
import whoweare from "@/views/whoweare.vue";
import whatwedo from "@/views/whatwedo.vue";
import ourvision from "@/views/ourvision.vue";
import people from "@/views/people.vue";
import getintouch from "@/views/getintouch.vue";
import "../node_modules/nprogress/nprogress.css";

export default new Router({
  routes: [
    { path: "/", name: "home", component: home },
    { path: "/who-we-are", name: "whoweare", component: whoweare },
    { path: "/what-we-do", name: "whatwedo", component: whatwedo },
    { path: "/our-vision", name: "ourvision", component: ourvision },
    { path: "/people", name: "people", component: people },
    { path: "/get-in-touch", name: "getintouch", component: getintouch }
  ],
  mode: "history"
});
