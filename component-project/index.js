// declaring a global component

Vue.component('global-component', {
  template: '<div>Check out this global Vue component</div>'
})




var app1 = new Vue({
  el: '#app-1'
})

// local components

var localComponent = Vue.component('local-component', {
  template: '<div>Check out this local Vue component</div>'
})

var evenCounter = Vue.component('even-counter', {
  template: '<button v-on:click="count += 2">{{count}}</button>',
  data: function() {
    return {
      count: 0
    }
  }
});

var app2 = new Vue({
  el: '#app-2',
  components: {
    'local-component': localComponent,
    'even-counter': evenCounter
  }
})
