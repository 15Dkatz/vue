<template>
  <div class="col-md-12">
    <Item
      v-for="(item, index) in items"
      v-bind:passed-item="item"
      v-bind:type="type"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      items: [],
      type: this.$route.params.type
    }
  },
  created() {
    this.generateItems()
  },
  watch: {
    '$route': 'generateItems'
  },
  methods: {
    generateItems() {
      this.items = [];
      this.type = this.$route.params.type
      // for people
      let initial_ids = [1, 13, 14]
      for (let i in initial_ids) {
        let id = initial_ids[i];
        console.log('id', id);
        fetch(`http://swapi.co/api/${this.type}/${id}/`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          this.items.push(json);
          console.log('this.items', this.items);
        })
      }
    }
  },
  components: {
    Item
  }
}
</script>
