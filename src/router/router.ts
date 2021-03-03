import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const history = import.meta.env.SSR? createWebHistory() : createMemoryHistory();
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
    }
]
export default createRouter({
    history,
    routes,
    scrollBehavior(){

    }
})