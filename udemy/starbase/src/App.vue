<template>
  <div id="app">
    <h3 class="">Select a Character</h3>
    <Match />
  </div>
</template>

<script>
import Match from './components/Match.js'
export default {
  name: 'app',
  components: {
    Match
  }
}
</script>


<!-- Emit the select function based on the child match component -->
