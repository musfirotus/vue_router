import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import VuePaginate from 'vue-paginate'

import routes from './routes'
Vue.use(VuePaginate)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes// short for `routes: routes`
})



Vue.mixin({
  data: function() {
    return {
      paginate: ["posting"],
    };
  },
});

new Vue({
  router,
  VuePaginate,
  render: h => h(App),
}).$mount('#app')
