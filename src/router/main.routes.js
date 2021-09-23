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
            {
                path: '/fame',
                name: 'FamePage',
                component: () => import('../pages/fame/FamePage.vue'),
            },
            {
                path: '/quiz',
                name: 'QuizPage',
                component: () => import('../pages/quiz/QuizPage.vue'),
            },
            {
                path: '/tournaments',
                name: 'TournamentsPage',
                component: () => import('../pages/tournaments/TournamentsPage.vue'),
            },
        ],
    },
];

export default routes;