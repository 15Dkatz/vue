<template>
<div class="">
  <div class="">
    <h3>Events Dashboard</h3>
    <button
      type="button"
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
    <!-- Loop through this.$store.state.events -->
    <EventItem
      v-for="(event, i) in this.$store.state.events"
      v-bind:event="event"
      key="i"
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
        const { title, description, date, location, email } = event.val();
        events.push({ title, description, date, location, email })
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
