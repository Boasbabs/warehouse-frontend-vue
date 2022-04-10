import Vue from 'vue'
import VueRouter from 'vue-router'
import AddArticle from '../features/articles/containers/AddArticle.vue'
import ListArticlesVue from '../features/articles/containers/ListArticles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AddArticle
  },{
    path: '/articles',
    name: 'Article',
    component: ListArticlesVue
  },
 
  {
    path: '/article/add',
    name: 'AddArticle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../features/articles/containers/AddArticle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
