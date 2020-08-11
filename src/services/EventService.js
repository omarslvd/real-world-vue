export default {
  getEvents: function() {
    return fetch("http://localhost:3000/events");
  },
  gteEvent: function(id) {
    return fetch("http://localhost:3000/events/" + id);
  }
};
