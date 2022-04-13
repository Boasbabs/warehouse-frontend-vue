import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Chakra)


new Vue({
  router,
  store,
  render: h => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
