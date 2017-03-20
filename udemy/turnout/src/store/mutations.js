import * as types from './mutation-types'

export const mutations = {
  // make payload the user object
  [types.SIGNED_IN] (state, user_payload) {
    state.signedIn = true
    console.log('user_payload in mutation', user_payload)
    state.user = user_payload
  },

  // reset to defaults
  [types.SIGNED_OUT] (state) {
    console.log('resetting the user in store')
    state.signedIn = false
    state.user = {}
  }
}

// have another mutation for types.SIGNED_UP
