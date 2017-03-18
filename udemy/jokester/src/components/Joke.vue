<template>
<div class="col-md-4">
  <div class="joke-card">
    <div class="card-block">
      <button
        type="button"
        class="close"
        @click="removeJoke(this.id)"
      >
        <span>&times;&nbsp;</span>
      </button>
      <p><u>{{joke.setup}}</u></p>
      <p><em>{{joke.punchline}}</em></p>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['joke', 'id'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>
