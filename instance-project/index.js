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

// conditional rendering
var app4 = new Vue({
  el: '#app-4',
  data: {
    primary: true,
    showTemplate: true,
    number: 1,
    infoType: 'email'
  },
  methods: {
    toggleInfoType: function() {
      console.log('toggling type');
      this.infoType = this.infoType === 'email' ? 'phone number' : 'email';
    }
  }
})

// list rendering
var app5 = new Vue({
  el: '#app-5',
  data: {
    tasks: [
      { title: 'Read Ruby 1 '},
      { title: 'Read Ruby 2 '}
    ],
    vader: {
      firstName: 'Darth',
      lastName: 'Vader',
      color: 'red'
    }
  }
})


// list rendering on components
Vue.component('task-item', {
  template: `
    <li>
      {{task.title}}
    </li>
  `,
  props: ['task']
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    newTask: '',
    tasks: [
      { title: 'Read Ruby 1', isDone: false },
      { title: 'Read Ruby 2', isDone: true }
    ],
    numbers: [1, 2, 3, 4, 5, 6]
  },
  methods: {
    addTask: function() {
      this.tasks.push({title: this.newTask, isDone: false})
    },
    oddsOnly: function(array) {
      return array.filter(i => i % 2 == 0 ? '' : i)
    }
  }
})
