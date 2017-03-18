import * as types from './mutation-types'

export const mutations = {
  [types.INIT_JOKES] (state, payload) {
    state.jokes.push(...payload)
  },

  [types.ADD_TO_JOKES] (state, payload) {
    console.log('payload', payload);
    state.jokes.push(payload);
  },

  [types.REMOVE_JOKE] (state, id) {
    console.log('remove by id', id)
    state.jokes.splice(id, 1)
  }
}
