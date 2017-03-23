<!-- TODO add transitions?

Inspiration:
https://github.com/vuejs/vue-router/blob/dev/examples/data-fetching/Post.vue

-->
<template>
<div class="col-md-4" v-on:click="switchItem">
  <div class="item-card">
    <div class="card-block">
      <h4 class="card-title">{{item.name}}</h4>
      <div v-for="(value, key, index) in item">
        <div v-if="index < 5">
          <strong>{{key}}</strong> : {{value}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['passedItem', 'type'],
  data() {
    return {
      item: {}
    }
  },
  created() {
    console.log('this.item', this.item)
    this.item = this.passedItem
  },
  methods: {
    switchItem() {
      // 61 is a safe range for both
      let random_id = Math.floor(Math.random() * 61) + 1;
      fetch(`http://swapi.co/api/${this.type}/${random_id}/`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log('json', json)
        this.item = json
      })
    }
  }
}
</script>
