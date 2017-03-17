<template>
  <div id="app">
    <h4>
      <router-link class="link" to="/data/people" replace>Meet the Characters</router-link> |
      <router-link class="link" to="/data/planets" replace>Explore the Planets</router-link>
    </h4>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
