<template>
<div class="">
  <div class="">
    Dashboard component
  </div>
  <button
    type="button"
    class="btn btn-primary"
    @click="signOut"
  >Sign Out</button>
</div>
</template>


<script>
import { firebaseApp } from '../firebaseApp'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signout')
      firebaseApp.auth().signOut()
    }
  }
}
</script>
