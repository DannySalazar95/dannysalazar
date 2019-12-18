import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'
import 'viewerjs/dist/viewer.css'

import Viewer from 'v-viewer'

Vue.config.productionTip = false

Vue.use(Viewer)

new Vue({
  render: h => h(App),
}).$mount('#app')
