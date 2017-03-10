<template>
  <div id="one">
    <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
  name: 'one',
  data() {
    return {
      title: 'Component One'
    }
  }
}
</script>

<style>
#one {
  text-decoration: underline;
}
</style>
