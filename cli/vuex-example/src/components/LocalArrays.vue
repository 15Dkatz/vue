<template>
  <div>
    <span>Module One Local Arr: {{$store.state.moduleOne.local_arr}}</span>
    <button @click="incrementFive">Increment Five to Local Arr</button>
  </div>
</template>

<script>
export default {
  methods: {
    incrementFive: function() {
      this.$store.dispatch('moduleOne/incrementFive')
    }
  }
}
</script>
