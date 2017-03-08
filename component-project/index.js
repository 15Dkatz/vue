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


// props

// lion theme
var cubComponent = Vue.component('cub', {
  props: ['furColor', 'numTeeth'],

  // place cleaning logic within a computed property because
  // you cannot modify the passed props data and expect it to modify parent state
  computed: {
    trueFur: function() {
      return this.furColor.toLowerCase();
    },
    trueTeeth: function() {
      return this.numTeeth > 40 ? 40 : this.numTeeth;
    }
  },

  // props becomes available within the template,
  // just like data from the data object

  // arbitrary operations on numTeeth to show that we pass an actual JS number.
  template: '<span>I sport {{trueFur}} fur as a cub. I have {{trueTeeth}} teeth.</span>'
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    furColor: 'maroon',
    numTeeth: 30
  },
  components: {
    'cub': cubComponent
  }
})


var strictCubComponent = Vue.component('strict-cub', {
  props: {
    // the value is the type - String, Number, Boolean, Function, Object, Array
    furColor: {
        type: String,
        required: true
    },
    numTeeth: {
      type: Number,
      default: 30
    }
  },
  template: '<div>A strict lion with {{furColor}} fur and {{numTeeth}} teeth.</div>'
})

var app4 = new Vue({
  el: '#app-4',
  components: {
    'strict-cub': strictCubComponent
  }
});


// CONTINUE WITH CUSTOM EVENTS IN COMPONENTS


// use events to handle data passing from children to parents
// make a total input

// make a component that "grows" an array by adding stars - * - to it
// have a global component that compiles the arrays
// combine arrays
var localArr = Vue.component('local-arr', {
  template: '<button v-on:click="grow">{{localArr}}</button>',
  data: function() {
    return {
      localArr: []
    }
  },
  methods: {
    grow: function() {
      this.localArr.push('*')
      this.$emit('grow')

    }
  }
})


var lowerInput = Vue.component('lower-input', {
  template: '<input v-bind:value="checkText" v-on:input="lowerText">',
  data: function() {
    return {
      checkText: ''
    }
  },
  methods: {
    lowerText: function(event) {
      this.checkText = event.target.value.toLowerCase();
    }
  }
})

// example of intiializing data as props
// then cleaning any further data input
var upperInput = Vue.component('upper-input', {
  template: `
    <span>
      Can you input anything lowercase...?
      <br>
      <input
        v-bind:value="newText"
        v-on:input="upperText($event.target.value)">
    </span>
  `,
  // must specify props in the object
  props: {
    text: {
      type: String,
      required: true
    }
  },

  data: function() {
    return {
      newText: this.text
    }
  },


  methods: {
    upperText: function(text) {
      this.newText = text.toUpperCase();
    }
  }
})




// Make multiple enlarge buttons with a button component
var textBus = new Vue();

var growButton = Vue.component('grow-button', {
  template: `<button v-on:click="grow">Grow</button>`,
  methods: {
    grow: function() {
      console.log('emitting grow');
      textBus.$emit('grow')
    }
  }
})


// Make text components that grow in size with each button component click

var textField = Vue.component('text-field', {
  template: `<div :style="computedFont">text</div>`,
  props: {
    size: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      newTextSize: this.size
    }
  },
  created: function() {
    // arrow function for to recognize the 'this' object of the parent
    textBus.$on('grow', () => {
      this.newTextSize *= 2;
    })
  },
  computed: {
    computedFont: function() {
      return `font-size: ${this.newTextSize}px`
    }
  }

});

var app5 = new Vue({
  el: '#app-5',
  data: {
    globalArr: []
  },
  methods: {
    growTotal: function() {
      this.globalArr.push('*')
    }
  }
})



var slotComponent = Vue.component('slot-component', {
  template: `
    <div>
      <h2>Check out the slot comp title</h2>
      <slot>Fallback to this slot.</slot>
    </div>
  `
})

var formComponent = Vue.component('form-component', {
  template: `
    <form>
      <div>
        <slot name="title"></slot>
        <slot subtitle="check out the subs"></slot>
      </div>
    </form>
  `
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    currentComponent: 'slot-c'
  },
  components: {
    'slot-c': slotComponent,
    'form-c': formComponent
  },
  methods: {
    change: function() {
      console.log('change', this.currentComponent);
      this.currentComponent = this.currentComponent == 'slot-c' ? 'form-c' : 'slot-c';
    }
  }
})

// TODO read through the misc.
