import { createApp } from 'vue'
import { addDirective } from 'vui-vc-next'
import { defaultImage } from './assets/img'
import App from './App.vue'
import './assets/rem' // responsive
import 'vui-vc-next/css' // lib css
import './index.css'

const app = createApp(App)
addDirective({ app, defaultImage }) // register global custom directive
app.mount('#app')
