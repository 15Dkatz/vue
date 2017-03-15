import { INCREMENT_NUM } from './mutation-types';

export const mutations = {
  // payload is an object { num: 0 } with a num property
  [INCREMENT_NUM] (state, payload) {
    state.global_arr.push(payload.num)
  }
}
