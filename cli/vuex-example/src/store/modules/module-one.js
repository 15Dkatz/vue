import * as types from '../mutation-types'

const state = {
  local_arr: []
}

const getters = {
  getLocalArr: state => state.local_arr
}

const actions = {
  incrementFive(context) {
    context.commit(types.INCREMENT_NUM, { num: 5 })
  }
}

const mutations = {
  [types.INCREMENT_NUM] (state, payload) {
    state.local_arr.push(payload.num)
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
