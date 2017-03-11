<template>
  <div id="three">
    <h5>{{title}}</h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'three',
  data() {
    return {
      title: 'Component Three | with a nested (letters) route!'
    }
  }
}
</script>

<style>
#three {
  text-decoration: underline;
}
</style>
