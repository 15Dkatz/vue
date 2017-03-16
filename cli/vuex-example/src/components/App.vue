<!-- TODO modules! -->

<template>
  <div id="app">
    <ArrayComponent />
    <ArrayCount />
    <IncrementButton />
    <LocalArrays />
  </div>
</template>

<script>
import ArrayComponent from './ArrayComponent.vue'
import ArrayCount from './ArrayCount.vue'
import IncrementButton from './IncrementButton.vue'
import LocalArrays from './LocalArrays.vue'

export default {
  name: 'app',
  // specify the list of components
  components: { ArrayComponent, ArrayCount, IncrementButton, LocalArrays }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
