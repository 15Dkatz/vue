import * as types from './mutation-types'

export const mutations = {
  [types.INIT_JOKES] (state, payload) {
    state.jokes.push(...payload)
  },

  [types.ADD_JOKE] (state, payload) {
    console.log('payload', payload);
    state.jokes.push(payload);
  },

  [types.REMOVE_JOKE] (state, index) {
    console.log('remove by index', index)
    state.jokes.splice(index, 1)
  }
}
