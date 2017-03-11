

<template>
  <div id="two">
    <h5>{{title}} | and Letter in Props: {{ letter }}</h5>
    <button @click="navigateThree">Navigate to Three</button>
  </div>
</template>

<script>
import { router } from '../main';
console.log('router', router);

// this line sends the .vue component to other files
export default {
  name: 'two',
  props: ['letter'],
  data() {
    return {
      title: 'Component Two'
    }
  },
  methods: {
    navigateThree: function() {
      console.log('navigate to Three')
      router.push('/three')
    }
  }
}
</script>

<style>
#two {
  text-decoration: underline;
}
</style>
