export default {
  getEvents: function() {
    return fetch("http://localhost:3000/events");
  },
  getEvent: function(id) {
    return fetch("http://localhost:3000/events/" + id);
  }
};
