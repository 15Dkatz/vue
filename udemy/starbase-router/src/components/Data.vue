<template>
  <div class="col-md-12">
    <Item
      v-for="(id, index) in setup.initial_ids"
      v-bind:id="id"
      v-bind:type="setup.type"
      v-bind:key="index"
    />
    {{setup.initial_ids}}
  </div>
</template>

<script>
import Item from './Item.js'

export default {
  data() {
    return {
      setup: {
        type: this.$route.params.type,
        initial_ids: [1, 13, 14]
      }
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('reacting to route changes', to, from)
      this.regenerateItems()
    }
  },
  methods: {
    regenerateItems: function() {
      console.log('regenerate items with', this.$route.params.type)
      this.setup = {
        type: this.$route.params.type,
        initial_ids: [2, 4, 6]
      }
    }
  },
  components: {
    Item
  }
}
</script>
