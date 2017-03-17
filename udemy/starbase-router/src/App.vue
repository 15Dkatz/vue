<!-- TODO generalize Character as Item -->
<!-- Either fetch charac -->

<template>
  <div id="app">
    <h4><router-link class="link" to="/data/people" replace>Generate your Squad</router-link></h4>
    <h4><router-link class="link" to="/data/vehicles" replace>Find your Vehicles</router-link></h4>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import Item from './components/Item.js'
export default {
  name: 'app',
  
  components: {
    Item
  }
}
</script>
