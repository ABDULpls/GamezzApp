export default [
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('./LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import('./RegisterPage.vue'),
    },
];