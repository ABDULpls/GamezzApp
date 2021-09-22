const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'HomePage',
                component: () => import('../pages/games/GamesPage.vue'),
                alias: '/games'
            },
        ],
    },
];

export default routes;