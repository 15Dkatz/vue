import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { INCREMENT_NUM } from './mutation-types'

Vue.use(Vuex)

const state = {
  global_arr: [0, 1, 2]
}

/* another alternative convention is to
 place the getters within a 'getters.js' file */

const getters = {
  even_arr: state => state.global_arr.filter(item => item % 2 === 0)
}

const actions = {
  increment20(context) {
    context.commit(INCREMENT_NUM, { num: 20 })
  },
  increment30async({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(INCREMENT_NUM, { num: 30 })
        resolve()
      }, 3000)
    })
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
