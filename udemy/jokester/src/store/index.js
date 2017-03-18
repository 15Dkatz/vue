import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

console.log('actions', actions);

Vue.use(Vuex)

// TODO fetch jokes from the api
const state = {
  jokes: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
