import {RouteRecordRaw} from 'vue-router';
const routes: RouteRecordRaw[] = [
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