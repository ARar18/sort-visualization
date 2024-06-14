import Vue from 'vue'
import Router from 'vue-router'
import Hello from "../components/Hello.vue";
import feature from "../components/Feature.vue";
import bubble from "../components/algorithm/Bubble.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: "/feature",
      component: feature
    },
    {
      path: "/algorithm/Bubble",
      component: bubble
    }
  ]
})
