<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name;
  //   },
  //   userId() {
  //     return this.$store.state.user.id;
  //   }
  // }
  // computed: mapState({
  //   userName: state => state.user.name,
  //   userId: state => state.user.id,
  //   categories: state => state.categories
  // })
  // computed: mapState({
  //   user: "user",
  //   categories: "categories"
  // })

  // computed: mapState(["user", "categories"])

  // Para usar mapState cuando ya hay computed properties
  computed: {
    // catLength() {
    //   return this.$store.getters.catLength;
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById;
    // },
    ...mapGetters(["catLength", "getEventById"]),
    ...mapState(["user", "categories"])
  }
};
</script>

<style></style>
