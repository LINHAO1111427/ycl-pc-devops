import './assets/css/main.css'
import "./assets/css/font.css"
import "./assets/sass/public.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引用插件
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'

import myPlugin from './plugins/myPlugin.ts';
console.log('start')
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(myPlugin);

app.mount('#app')
