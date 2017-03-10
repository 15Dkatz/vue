<template>
  <div id="two">
    <h5>{{title}}</h5>
  </div>
</template>

<script>
// this line sends the .vue component to other files
export default {
  name: 'two',
  data() {
    return {
      title: 'Component Two'
    }
  }
}
</script>

<style>
#two {
  text-decoration: underline;
}
</style>
