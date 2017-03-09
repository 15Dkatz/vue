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

var listDemo = new Vue({
  el: '#list-demo',
  data: {
    numbers: [10, 20, 30, 40, 50]
  },
  methods: {
    add: function() {
      this.numbers.push(Math.ceil(Math.random()*10)*10);
    },
    remove: function() {
      this.numbers.splice(this.numbers.length-1, 1)
    }
  }
})

// showing off the improvement with anchor-headings

var simpleTemplate = Vue.component('simple-template', {
    template: `
      <div>
        <h1 v-if="level === 1">
          <slot></slot>
        </h1>
        <h2 v-if="level === 2">
          <slot></slot>
        </h2>
      </div>
    `,
    data: function() {
      return {
        level: 2
      }
    }
});

var renderTemplate = Vue.component('render-template', {
  render: function(createElement) {

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: 'replace with dynamic function that finds teh argued child text',
            href: '#' + 'replace with dynamic function that finds the argued child text'
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

var renderDemo = new Vue({
  el: '#render-demo',
  components: {
    'simple-template': simpleTemplate
  }
})

// console.log('loaded');

var focus = Vue.directive('focus', {
  inserted: function(el, binding) {
    // console.log('el', el);
    // console.log('binding', binding);
    var trueFocus = binding.value.trueFocus;

    if (trueFocus) {
      // console.log('trueFocus', trueFocus);
      el.innerHTML = 'inserted focus';
    }
  }
})

var directiveDemo = new Vue({
  el: '#directive-demo',
  directives: {
    focus: focus
  }
})


// mixins

var vueMixin = {
  created: function() {
    this.mixin()
  },
  methods:{
    mixin: function() {
      console.log('a mixin component method')
    }
  }
};

// Vue.extend?
var MixinComponent = Vue.extend({
  mixins: [vueMixin],
  created: function() {
    console.log('component created after mixin')
  }
})

var mixinComponent = new MixinComponent();
