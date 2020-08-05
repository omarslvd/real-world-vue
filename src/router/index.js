import Vue from "vue";
import VueRouter from "vue-router";
// import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
// import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventShow",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (event-show.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event-show" */ "../views/EventShow.vue")
  },
  {
    path: "/event/create",
    name: "EventCreate",
    // route level code-splitting
    // this generates a separate chunk (event-create.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event-create" */ "../views/EventCreate.vue")
  }
];

const router = new VueRouter({
  // Estas líneas difieren si se escoge history o no en el wizard al momento de crear el proyecto
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
