import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import home from "@/components/home.vue";
import whoweare from "@/components/whoweare.vue";
import whatwedo from "@/components/whatwedo.vue";
import ourvision from "@/components/ourvision.vue";
import people from "@/components/people.vue";
import getintouch from "@/components/getintouch.vue";

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
