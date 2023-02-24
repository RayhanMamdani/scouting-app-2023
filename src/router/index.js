import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '../views/Landing.vue'
import Teams from '../views/Teams.vue'
import Matches from '../views/Matches.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ScoutMatch',
      name: 'auto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ScoutMatch.vue')
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    }
   
  ]
})

// Route guard

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/'];
//   const authRequired = !publicPages.includes(to.path);
  

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired) {
//    router.push(from.path);
//   } else if(to.path === '/'){
//       next();
     
//   } else {
//       next();
//   }
// });

export default router
