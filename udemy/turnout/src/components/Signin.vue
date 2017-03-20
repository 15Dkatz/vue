<template>
  <div class="">
    <div class="">
      Sign In Component | TODO style this component up!
    </div>
    <input
      type="text"
      placeholder="email"
      v-model="email"
    />
    <input
      type="password"
      placeholder="password"
      v-model="password"
    />
    <button
      @click="signIn"
      type="button"
      className="btn btn-primary"
    >
      Sign In
    </button>
    <p>{{error.message}}</p>
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
      const { email, password } = this;
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.error = error;
        })
    }
  }
}
</script>
