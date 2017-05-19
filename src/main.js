import Vue from 'vue'
import App from './App.vue'
import router from './js/router-config.js'
import store from './store/store'
new Vue({
	store,
  el: '#app',
  router,
  render: h => h(App),
 
})
