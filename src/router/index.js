import Vue from "vue";
import VueRouter from "vue-router";
import { SingleArticle, ListArticles } from "../features"

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "Articles" } },
  {
    path: "/articles",
    name: "Articles",
    component: ListArticles
  },
  {
    path: "/article/add",
    name: "AddArticle",
    component: () => import("../features/articles/containers/AddArticle.vue")
  },
  {
    path: "/articles/:articleId",
    name: "SingleArticle",
    component: SingleArticle,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
