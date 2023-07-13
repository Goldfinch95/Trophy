import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Achievements from "./components/Achievements.vue";
const routes = [
  {
    path: "/Search",
    component: Search,
  },
  {
    path: "/List",
    component: List,
  },
  {
    path: "/Achievements",
    component: Achievements,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
