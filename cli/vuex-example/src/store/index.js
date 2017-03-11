import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  global_arr: [0, 1, 2]
}

export default new Vuex.Store({
  state
})
