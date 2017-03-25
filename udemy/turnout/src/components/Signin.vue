<template>
<div class="form-inline">
  <h3>Sign In</h3>
  <div class="form-group">
    <input
      type="text"
      placeholder="email"
      class="form-control"
      v-model="email"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control"
      v-model="password"
    />
    <button
      @click="signIn"
      class="btn btn-primary"
    >
      Sign In
    </button>
  </div>
  <br>
  <p>{{error.message}}</p>
  <br>
  <router-link to="/signup">Not a user yet? Sign up.</router-link>
</div>
</template>

<script>
// TODO explain the idea of local state
// b.c. error is only important to this component
// but the store will update the user's info in the listener
// for the entire app
import { firebaseApp } from '../firebaseApp'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      // example user (manually created on firebase):
      // { email: frodo@hobbit.com, password: testing }
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        })
    }
  }
}
</script>
