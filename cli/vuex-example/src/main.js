import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

new Vue({
  el: '#app',
  store, // es6 shorthand
  render: h => h(App)
})
