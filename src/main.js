import { createApp } from 'vue'
import './style.css'
import {router} from './router'
import App from './App.vue'
// uso il router
createApp(App).use(router).mount('#app')


