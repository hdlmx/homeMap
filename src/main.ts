import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'leaflet/dist/leaflet.css'
import router from './router/index'


const app = createApp(App)

//添加路由
app.use(router)

app.use(Antd).mount("#app")
