import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import information from '../views/Information.vue'
import leaderBoard from '../views/Leaderboard.vue'
import game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound 
  },
  { 
    path: '/leaderboard', 
    name: 'leaderboard',
    component: leaderBoard 
  },
  { 
    path: '/info', 
    name:'information',
    component: information 
  },
  { 
    path: '/game', 
    name:'game',
    component: game 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
