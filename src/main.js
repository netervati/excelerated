import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";

const main_app = createApp(App)
const pinia = createPinia()

main_app.use(pinia)
main_app.use(VueApexCharts)

main_app.mount('#app')