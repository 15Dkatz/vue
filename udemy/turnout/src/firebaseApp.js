import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDCz27NcWtKqEVBuk1BvmRASLLqjoIqYWA",
  authDomain: "vue-auth-580ce.firebaseapp.com",
  databaseURL: "https://vue-auth-580ce.firebaseio.com",
  storageBucket: "vue-auth-580ce.appspot.com",
  messagingSenderId: "474456858537"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
