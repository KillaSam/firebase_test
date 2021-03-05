import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import store from '../store/store';

const Login = () => import('../components/Login&RegComponents/Login.vue');
const Profile = () => import('../components/ProfileComponents/Profile.vue');
const history = import.meta.env.SSR? createMemoryHistory() : createWebHistory();
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',     
        redirect: (to: RouteLocationNormalized) => {
            if(store.getters.checkUser){
                return { path: '/', name: 'profile', params: {user: store.getters.user}};
            }else{
                return { path: '/login', name: 'login' }
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        components:{
            default: Login
        },
    },
    {
        path: '/register',
        name: 'register',
        components:{
            default: Login
        }
    },
    {
        path: '/:user',
        name: 'profile',
        component: Profile,
        beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next){
            if(store.getters.checkUser){
                next()
            }else{
                next({ name: 'login' })
            }
        },
        children: [
            {
                path: 'create',
                name: 'createPage',

            }
        ]
    }
]

const router = createRouter({
    history,
    routes,
    scrollBehavior(){

    }
})

export default router;