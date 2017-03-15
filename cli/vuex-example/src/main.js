import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { INCREMENT_NUM } from './store/mutation-types'

new Vue({
  el: '#app',
  store, // es6 shorthand
  render: h => h(App)
})

// example call of store.commit
store.commit(INCREMENT_NUM, { num: 10 });
store.commit({
  type: INCREMENT_NUM,
  num: 20
})
