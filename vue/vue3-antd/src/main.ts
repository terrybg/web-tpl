import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
var app = createApp(App);
app.use(Antd);
app.mount('#app')
