var todoComponent = Vue.component('todo', {
  props: ['item'],
  template: `
    <li><strong>{{item.title}}</strong>
    {{ item.text }}
    <template v-if="item.assign">Assigned</template>
    </li>
  `
})


var todoApp = new Vue({
  el: '#todo-app',
  data: {
    nextTodo: {title: '', text: '', assign: true},
    todos: [
      { text: 'Finish todo A' },
      { text: 'Finish todo B' },
      { text: 'Finish todo C' }
    ]
  },
  methods: {
    addNextTodo() {
      var { title, text, assign } = this.nextTodo;
      // need to create an entirely new todo
      var newTodo = { title, text, assign };
      this.todos.push(newTodo);
    }
  },
  components: {
    component: todoComponent
  }
})


// TODO continue tutorial on v-else-if
