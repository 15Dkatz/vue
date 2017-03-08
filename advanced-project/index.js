var compFrodo = Vue.component('comp-frodo', {
  template: `
    <div>Component Frodo</div>
  `
})

var compSam = Vue.component('comp-sam', {
  template: `
    <div>Component Sam</div>
  `
})


var app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Check out this advanced project.',
    reveal: true,
    view: 'comp-frodo'
  },
  methods: {
    toggleReveal: function() {
      this.reveal = !this.reveal;
    },
    toggleView: function() {
      this.view = this.view === 'comp-frodo' ? 'comp-sam' : 'comp-frodo';
      console.log('this.view', this.view);
    }
  },
  components: {
    'comp-frodo': compFrodo,
    'comp-sam': compSam
  }
})

// apply transition effect of fade
