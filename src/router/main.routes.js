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
            {
                path: '/profile',
                name: 'ProfilePage',
                component: () => import('../pages/profile/ProfilePage.vue'),
            },
            {
                path: '/profile/preview',
                name: 'ProfilePreviewPage',
                component: () => import('../pages/profile/preview/ProfilePreviewPage.vue'),
            },
            {
                path: '/profile/friends',
                name: 'ProfileFriendsPage',
                component: () => import('../pages/profile/friends/ProfileFriendsPage.vue'),
            },
            {
                path: '/profile/black-list',
                name: 'ProfileBlackListPage',
                component: () => import('../pages/profile/black-list/ProfileBlackListPage.vue'),
            },
        ],
    },
];

export default routes;