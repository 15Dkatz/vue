<template>
<div class="col-md-4">
  <div class="event-card">
    <div class="card-block">
      <h4 class="card-title">{{event.title}}</h4>
      <p class="card-text">{{event.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{event.date}}</li>
      <li class="list-group-item">{{event.location}}</li>
      <li class="list-group-item">Host: {{event.email}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['event']
}
</script>
