<!-- TODO add a favoriting action that modifies state ? -->
<!-- TODO add more to the API -->
<template>
  <div id="app">
    <h3>Got Jokes?</h3>
    <button class="btn btn-success" @click="initJokes">Add 10 random jokes</button>
    <button class="btn btn-primary" @click="addJoke">Add a joke</button>
    <br>
    <div>
      <span v-for="type in types">
        <input
          type="checkbox"
          :id="type"
          :value="type"
          v-model="checkedTypes"
          checked
        />
        <label :for="type">{{type}}</label>&nbsp;
      </span>
    </div>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :id="index"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  computed: {
    typeChecked(joke) {
      console.log('joke', joke)
    }
  },
  methods: mapActions([
    'addJoke',
    'initJokes'
  ]),
  components: {
    Joke
  }
}
</script>
