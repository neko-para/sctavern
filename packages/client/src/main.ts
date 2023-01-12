import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

import './assets/main.css'

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')

import { useMobileStore } from '@/stores/mobile'

const mobile = useMobileStore()
const mm = matchMedia('(max-height: 599px)')
mobile.setMobile(mm.matches)
mm.addEventListener('change', () => {
  mobile.setMobile(mm.matches)
})
