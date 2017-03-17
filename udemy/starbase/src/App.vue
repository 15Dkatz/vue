<template>
  <div id="app">
    <h3 class="">Select a Character</h3>
    <div class="col-md-12">
      <Character
        v-for="c in character_ids"
        v-on:select="selectCharacter"
        v-bind:id="c"
        key="c"
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
      character_ids: [
        1, 2
      ]
    }
  },
  methods: {
    selectCharacter: function(id) {
      console.log('selecting a character', id);

      // generate a new id for the other one

      // 83 is the number of characters in the list
      let random_id = Math.floor(Math.random() * 83) + 1;

      console.log('switch to', random_id);


      // remove the other one
      this.character_ids.splice(this.character_ids.indexOf(id), 1);

      this.character_ids.push(random_id);

      console.log('this.character_ids', this.character_ids);
    }
  },
  components: {
    Character
  }
}
</script>
