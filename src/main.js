import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
