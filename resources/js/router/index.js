import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Vue from "../views/App.vue";
import requestPassword from "../views/RequestPassword.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home // 確保你有一個 Home.vue 組件
        },
        {
            path: '/dashboard',
            // name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/request-password',
            name: 'requestPassword',
            component: requestPassword
        }
    ]
});

export default router;