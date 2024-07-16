import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSession from 'vue-session'

import router from './router'

createApp(App).use(router, VueSession).mount('#app')