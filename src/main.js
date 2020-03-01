import Vue from 'vue'
import App from './components/Test'
import routeraaaa from './route/router'
import store from './store/MyStore'

new Vue({
  store,
  render: h => h(App),
  router:routeraaaa,
 
}).$mount('#app')
