import Vue from 'vue'

// "name": "Luke Skywalker", "height": "172", "mass": "77",
// "hair_color": "blond", "skin_color": "fair",
// "eye_color": "blue", "birth_year": "19BBY",

export default Vue.component('character', {
  template: `<div
                class="col-md-6"
                v-on:click="select"
              >
                <div class="card">
                  <div class="card-block">
                    <h4 class="card-title">{{character.name}}</h4>
                    <p class="card-text"><strong>Height:</strong> {{character.height}}cm</p>
                    <p class="card-text"><strong>Mass:</strong> {{character.mass}}kg</p>
                    <p class="card-text"><strong>Hair Color:</strong> {{character.hair_color}}</p>
                    <p class="card-text"><strong>Eye Color:</strong> {{character.eye_color}}</p>
                  </div>
                </div>
                {{fetch_limit}}
              </div>`,
  props: ['id'],
  methods: {
    select: function() {
      this.$emit('select', this.id);
      this.fetch_limit++;
      console.log('this.fetch_limit', this.fetch_limit);
    }
  },
  data() {
    return {
      character: {},
      fetch_limit: 0
    }
  },
  mounted: function() {
    fetch(`http://swapi.co/api/people/${this.id}/`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      this.character = json;
    })
  },
  updated: function() {
    console.log('called the character updated hook ');
    
    // fetch(`http://swapi.co/api/people/${this.id}/`, {
    //   method: 'GET'
    // })
    // .then(response => response.json())
    // .then(json => {
    //   console.log('json', json);
    //   this.character = json;
    // })
  }
  // ,
  // beforeUpdate: function() {
  //   console.log('updated lifecycle hook called', this.fetch_limit);
  //   this.fetch_limit++;
  //
  //   if (this.fetch_limit <= 2) {
  //
  //     fetch(`http://swapi.co/api/people/${this.id}/`, {
  //       method: 'GET'
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log('json', json);
  //       this.character = json;
  //     })
  //   }
  //
  // }
})
