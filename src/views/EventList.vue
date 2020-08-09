<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
  </div>
</template>

<script>
//import EventCard from "@/components/EventCard.vue";
import EventCard from "../components/EventCard.vue";

export default {
  components: {
    EventCard
  },
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    fetch("http://localhost:3000/events")
      .then(function(response) {
        return response.json();
      })
      .then(
        function(json) {
          this.events = json;
        }.bind(this)
      )
      .catch(function(error) {
        console.log("There was an error: " + error.message);
      });
  }
};
</script>

<style></style>
