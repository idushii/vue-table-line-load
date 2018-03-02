import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

import VueResource from "vue-resource"
Vue.use(VueResource);

import list from "./list.vue";
Vue.component('list', list)

new Vue({
  el: '#app',
  render: h => h(App)
})
