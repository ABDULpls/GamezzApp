import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import authRoutes from './auth-routes';

declare module 'vue-router' {
    interface RouteMeta {
        layout?: string
    }
}

const routes: RouteRecordRaw[] = [
    ...authRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;