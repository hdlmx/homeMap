import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("../views/indexDashboard.vue")
        },
        {
            path: "/location",
            name: "location",
            component: () => import("../views/location/map.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue")
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../views/home/homeSpace.vue")
        }
    ]
});

export default router;
