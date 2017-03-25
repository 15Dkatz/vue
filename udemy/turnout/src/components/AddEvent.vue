<template>
<div class="">
  <div class="">
    <h4>Add an event <input type="checkbox" v-model="showForm"></h4>
  </div>
  <div class="form" v-if="showForm">
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="title" v-model="event.title">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input type="text" class="form-control" placeholder="description" v-model="event.description">
    </div>
    <div class="form-group">
      <label>Date</label>
      <input type="date" class="form-control" v-model="event.date">
    </div>
    <div class="form-group">
      <label>Location/Address</label>
      <input type="text" class="form-control" placeholder="Location/Address" v-model="event.location">
    </div>
    <button
      type="button"
      class="btn-sm btn-primary"
      @click="addEvent"
    >
      Submit
    </button>
  </div>

</div>
</template>

<script>
import { eventsRef } from '../firebaseApp'

export default {
  data() {
    return {
      showForm: false,
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      }
    }
  },


  methods: {
    addEvent() {
      const { email } = this.$store.state.user
      this.event.email = email;
      eventsRef.push(this.event)
    }
  }
}
</script>
