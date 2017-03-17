import Vue from 'vue'

export default Vue.component('item', {
  template: `<div
                class="col-md-4"
                v-on:click="select"
              >
                <div class="item-card">
                  <div class="card-block">
                    <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text"><strong>Height:</strong> {{item.height}}cm</p>
                    <p class="card-text"><strong>Mass:</strong> {{item.mass}}kg</p>
                    <p class="card-text"><strong>Hair Color:</strong> {{item.hair_color}}</p>
                    <p class="card-text"><strong>Eye Color:</strong> {{item.eye_color}}</p>
                  </div>
                </div>
              </div>`,
  props: ['id', 'type'],
  methods: {
    fetchItem: function(id) {
      fetch(`http://swapi.co/api/${this.type}/${id}/`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        this.item = json;
      })
    },
    select: function() {
      // 83 is the number of characters in the list
      let random_id = 0;
      if (this.type === 'people') {
        random_id =   Math.floor(Math.random() * 83) + 1;
      }
      // if this.type === 'vehicle'

      this.fetchItem(random_id)
    }
  },
  data() {
    return {
      item: {}
    }
  },
  created() {
    this.fetchItem(this.id);
  },
  updated() {
    console.log('updated called')
  }
})
