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
      
      component: () => import('../views/ScoutMatch.vue')
    },
    {
      path: '/match/:num',
      name: 'match',
      
      component: () => import('../views/MatchProfile.vue')
    },
    {
      path: '/team/:num',
      name: 'team',
      
      component: () => import('../views/TeamProfile.vue')
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page Not Found',
      component: () =>
          import ('../views/PageNotFound.vue')
  },
  {
    path: '/matchesTable',
    name: 'matchesTable',
    component: () =>
        import ('../views/MatchesTable.vue')
},
{
  path: '/about',
  name: 'about',
  component: () =>
      import ('../views/about.vue')
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
