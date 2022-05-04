import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routers'

const router = createRouter({
    history: createWebHashHistory(),  // hash 模式，想要改为history 模式可以使用createWebHistory
    routes
})

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    if (to.path == '/login') {
        to.meta.transitionName = 'down'
        from.meta.transitionName = 'opt'
    } else if (from.path == '/login') {
        from.meta.transitionName = 'down'
        to.meta.transitionName = 'up'
    } else {
        to.meta.transitionName = toDepth <= fromDepth ? 'slide_left' : 'slide_right'
    }

})
export default router