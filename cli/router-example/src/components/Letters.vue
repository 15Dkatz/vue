<template>
  <div id="letters">
    <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
  name: 'letters',
  data() {
    return {
      title: 'Letters | A View meant to get nested'
    }
  }
}
</script>

<style>
#letters {
  text-decoration: underline;
}
</style>
