// make a signin action
import * as types from './mutation-types'

export const signin = ({ commit }, user_payload) => {
  commit(types.SIGNED_IN, user_payload)
}

export const signout = ({ commit }) => {
  commit(types.SIGNED_OUT)
}
