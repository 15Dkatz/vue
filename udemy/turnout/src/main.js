import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { firebaseApp } from './firebaseApp'
import store from './store'
import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

const otherSignin = Vue.component('other-signin', {
  template: `<div>Other Sign In Component</div>`
})


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
})

// add the firebase listener
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user authenticated => pushing to the app')
    // send the store action to create the user
    store.dispatch('signin', user)
    router.push('/dashboard')
  } else {
    console.log('no user => redirecting to sign in')
    router.replace('/signin')
  }
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
