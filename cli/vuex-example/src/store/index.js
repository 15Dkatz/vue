import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  global_arr: [0, 1, 2]
}

/* another alternative convention is to
 place the getters within a 'getters.js' file */

const getters = {
  even_arr: state => state.global_arr.filter(item => item % 2 === 0)
}


export default new Vuex.Store({
  state,
  getters
})
