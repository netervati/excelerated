import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const MainApp = createApp(App)
const pinia = createPinia()

MainApp.use(pinia)

MainApp.mount('#app')
