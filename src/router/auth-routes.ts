import {RouteRecordRaw} from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'AuthLayout',
        component: () => import('../layouts/AuthLayout.vue'),
        redirect: {name: 'LoginPage'},
        children: [
            {
                path: '/login',
                name: 'LoginPage',
                component: () => import('../pages/login/LoginPage.vue'),
            },
            {
                path: '/register',
                name: 'RegisterPage',
                component: () => import('../pages/register/RegisterPage.vue'),
            },
        ]
    },
];

export default routes;