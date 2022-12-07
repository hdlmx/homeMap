import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8089,
        proxy: {
            "/api": {
                target: "http://localhost:8082/",
                ws: true,//开启websocket代理
                changeOrigin: true,
                rewrite: (path) => path.replace("api", "")
            }
        }
    }
})
