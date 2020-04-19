import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser from '../views/LoginUser.vue'

Vue.use(VueRouter)

const mode = 'history'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUser
  }
]

const router = new VueRouter({
  routes,
  mode
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
