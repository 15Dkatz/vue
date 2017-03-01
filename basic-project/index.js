var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Loaded the app on ' + new Date()
  }
})

// the object data within the data property gets
// bound to the Vue instance
var app3 = new Vue({
  el: '#app-3',
  data: {
    shown: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    classes: [
      {text: 'CS245'},
      {text: 'CS360'},
      {text: 'MAT202'}
    ]
  }
})

// can you get data from other VueJS instances?
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Original message'
  },
  methods: {
    updateMessage: function() {
      this.message +=' and then some.'
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    boundData: 'update me!'
  },
  methods: {
    logData: function() {
      console.log(this.boundData);
    }
  }
})



Vue.component('task-item', {
  props: ['task'],
  template: '<li>class: {{task.text}}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    classes: [
      {text: 'JS1'},
      {text: 'CS1'},
      {text: 'MO3'}
    ]
  }
})
