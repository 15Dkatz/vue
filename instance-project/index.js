var app1 = new Vue({
  el: '#app-1',
  data: {
    letters: ''
  },
  filters: {
    // return only letters using a Vue filter
    letterFilter: function(value) {
      // this regex, /^\d+$/.test(var) checks if var is a number. Returns true if so.
      return value.split('').filter(l => /^\d+$/.test(l) ? '' : l).join('');
    }
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    value: ''
  },
  computed: {
    reversedValue: function() {
      return this.value.split('').reverse().join('');
    },
    //
    result: function() {
      var reversed = this.value.split('').reverse().join('');
      return this.value === reversed;
    }
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    isActive: true,
    hasDanger: true,
    leadClass: 'lead',
    quoteClass: 'blockquote',
    styleObject: {
      fontSize: '18px',
      textDecoration: 'underline'
    }
  },
  computed: {
    computedClass: function() {
      return {
        active: false,
        'text-danger': true
      }
    }
  }
})
