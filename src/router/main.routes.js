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
				path: '/games/:slug',
				meta: {
					isGamePage: true
				},
				props: true,
				name: 'GamePage',
				component: () => import('../pages/games/GamePage.vue'),
			},
			{
				path: '/games/:slug/lobby',
				meta: {
					isGamePage: false,
					isInGame: true,
					hideMenu: true
				},
				props: (route) => ({
					...route.params
				}),
				name: 'GameLobbyPage',
				component: () => import('../pages/games/GameLobbyPage.vue'),
				beforeEnter: (to, from, next) => {
					if (!from.params.slug) {
						next({name: 'HomePage'});
					} else
						next()
				},
			},
			{
				path: '/chat/dialogs',
				name: 'ChatDialogs',
				component: () => import('../pages/chat/ChatDialogs.vue'),

			},

			{
				path: '/profile/wallet',
				name: 'ProfileWalletPage',
				component: () => import('../pages/profile/wallet/ProfileWalletPage.vue'),

			},
			{
				path: '/chat/private',
				name: 'ChatPrivate',
				meta: {
					isGamePage: false,
					hideMenu: true
				},
				component: () => import('../pages/chat/ChatPrivate.vue'),

			},
			{
				path: '/chat/global',
				name: 'ChatGlobal',
				component: () => import('../pages/chat/ChatGlobal.vue'),
				meta: {
					isGamePage: false,
					hideMenu: true
				},
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
