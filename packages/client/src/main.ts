import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

import './assets/main.css'

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')

import { useBrowserStore } from '@/stores/browser'

const mobile = useBrowserStore()
mobile.init()
