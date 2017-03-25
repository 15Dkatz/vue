import * as types from './mutation-types'

// todo initJokes action which initializes jokes
export const initJokes = ({ commit }) => {
  fetch('http://localhost:4000/random_ten', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    console.log('huge list of jokes', json)
    commit(types.INIT_JOKES, json)
  })
}


// TODO change to the heroku api and make sure cors works!
export const addJoke = ({ commit }) => {
  fetch('http://localhost:4000/random_joke', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    console.log('json', json)
    commit(types.ADD_JOKE, json)
  })
}

export const removeJoke = ({ commit }, index) => {
  console.log('called remove action with index', index)
  commit(types.REMOVE_JOKE, index)
}
