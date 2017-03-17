import Vue from 'vue'

// TODO add the api and resolve the divs

export default Vue.component('match', function(resolve, reject) {
  setTimeout(function() {
    resolve({
      template: '<div>Match</div>'
    })
  }, 1000)
})
