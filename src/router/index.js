import Vue from 'vue'
import VueRouter from 'vue-router'
import Comingsoon from "../views/Comingsoon.vue";
import Error from "../views/Error.vue";
import Privacy from "../views/Privacy.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Comingsoon
    },
    {
        path: '/privacy',
        name: 'About',
        component: Privacy
    },
    {
       path: '*',
       component: Error 
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
