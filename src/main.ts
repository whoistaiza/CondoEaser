import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

// Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
