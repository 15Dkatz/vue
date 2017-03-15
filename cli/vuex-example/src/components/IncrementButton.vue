<template>
  <div class="">
    <!-- TODO change the number to an input changed in data -->
    <button @click="incrementNum">Increment Number</button>
    <input v-model="num"/>
    <br>
    <button @click="increment20">Increment 20</button>
    <br>
    <button @click="increment30async">Increment 30 async</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { INCREMENT_NUM } from '../store/mutation-types'

export default {
  data: function() {
    return {
      num: 10
    }
  },
  methods: {
    incrementNum: function() {
      this.$store.commit(INCREMENT_NUM, { num: +this.num })
    },
    increment20: function() {
      this.$store.dispatch('increment20')
    },
    increment30async: function() {
      this.$store.dispatch('increment30async').then(() => {
        alert('increment 30 after 3 seconds.')
      })
    }
  }
}
</script>
