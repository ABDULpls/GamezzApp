const routes = [
    {
        path: '/login',
        name: 'AuthLayout',
        component: () => import('../layouts/AuthLayout.vue'),
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
            {
                path: '/forgot-password',
                name: 'ForgotPasswordPage',
                component: () => import('../pages/forgot-password/ForgotPasswordPage.vue'),
            },
            {
                path: '/check-email',
                name: 'CheckEmailPage',
                component: () => import('../pages/check-email/CheckEmailPage.vue'),
            },
        ],
    },
];

export default routes;