<template>
<div class="">
  <div class="">
    <h3>Events Dashboard</h3>
    <button
      class="btn btn-sm btn-danger signout-btn"
      @click="signOut"
    >
      Sign Out
    </button>
  </div>
  <hr>
  <AddEvent />
  <hr>
  <div class="col-md-12">
    <EventItem
      v-for="(event, index) in this.$store.state.events"
      :event="event"
      key="index"
    />
  </div>
  <br>
  <hr>
</div>
</template>


<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signout')
      firebaseApp.auth().signOut()
    }
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val())
      })
      // dispatching an action
      this.$store.dispatch('setEvents', events)
    })
  },
  components: {
    AddEvent,
    EventItem
  }
}
</script>
