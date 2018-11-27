import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import { store } from './store'
import { init as FacebookInit } from 'nativescript-facebook'
import './app.scss'

Vue.prototype.$store = store
FacebookInit('490469378128814')

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient)

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
