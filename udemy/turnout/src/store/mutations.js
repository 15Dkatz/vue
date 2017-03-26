import * as types from './mutation-types'

export const mutations = {
  // make payload the user object
  [types.SIGN_IN] (state, user_payload) {
    console.log('user_payload in mutation', user_payload)
    state.user = user_payload
  },

  // reset to defaults
  [types.SIGN_OUT] (state) {
    console.log('resetting the user in store')
    state.user = {}
  },

  [types.SET_EVENTS] (state, events_payload) {
    console.log('setting the events store with payload', events_payload)
    state.events = events_payload
  }
}

// have another mutation for types.SIGNED_UP
