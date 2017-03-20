import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

console.log('actions', actions)

Vue.use(Vuex)

// signedIn false by default
// update with actions
const state = {
  signedIn: false,
  user: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
