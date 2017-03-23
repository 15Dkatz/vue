<template>
<div
  class="col-md-4"
  v-on:click="select"
>
  <div class="character-card">
    <div class="card-block">
      <h4 class="card-title">{{character.name}}</h4>
      <p class="card-text"><strong>Height:</strong> {{character.height}}cm</p>
      <p class="card-text"><strong>Mass:</strong> {{character.mass}}kg</p>
      <p class="card-text"><strong>Hair Color:</strong> {{character.hair_color}}</p>
      <p class="card-text"><strong>Eye Color:</strong> {{character.eye_color}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}/`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        this.character = json;
      })
    },
    select() {
      // 83 is the number of characters in the list
      let random_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(random_id)
    }
  },
  data() {
    return {
      character: {}
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
}
</script>
