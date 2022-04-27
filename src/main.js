import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const main_app = createApp(App)
const pinia = createPinia()

main_app.use(pinia)

main_app.mount('#app')