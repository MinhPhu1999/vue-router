// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./views/Home";
import About from "./views/About";
import Todos from "./views/Todos";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/todos", component: Todos }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
