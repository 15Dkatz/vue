<template>
  <div id="app">
    <h3 class="">Generate Your Squad</h3>
    <div class="col-md-12">
      <Character
        v-for="(id, index) in initial_ids"
        v-bind:id="id"
        v-bind:key="index"
      />
    </div>
  </div>
</template>

<script>
import Character from './components/Character.js'
export default {
  name: 'app',
  data() {
    return {
      initial_ids: [1, 13, 14]
    }
  },
  components: {
    Character
  }
}
</script>
