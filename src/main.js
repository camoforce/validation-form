import Vue from 'vue'
import Vuelidate from 'vuelidate'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/style.sass'

import App from './App.vue'

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')
