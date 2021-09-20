import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import authRoutes from '../components/auth/auth-routes';

const routes = [
    ...authRoutes,
] as RouteRecordRaw[];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;