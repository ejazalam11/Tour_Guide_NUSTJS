import { createApp } from 'vue'
import App from './App.vue'
// import './assets/main.css'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css' // or another theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.mount('#app')
