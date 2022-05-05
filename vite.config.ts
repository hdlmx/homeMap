import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [vue(), Components({
        //antDesign按需引入配置
        resolvers: [AntDesignVueResolver()],
    }),],
    server: {
        port: 3000,//本地前端服务启动端口
        open: true,//自动打开，
        base: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:8082',
                changeOrigin: true,//开启
                rewrite: (path) => path.replace('/api', '')

            }

        }
    }
})


