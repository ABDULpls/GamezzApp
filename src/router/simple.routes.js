const routes = [
	{
		path: '/',
		name: 'SimpleLayout',
		component: () => import('../layouts/SimpleLayout.vue'),
		children: [
			{
				path: '/bonus',
				name: 'BonusPage',
				component: () => import('../pages/bonus/BonusPage.vue'),
			},
			{
				path: '/games/:slug/create',
				meta: {
					isGamePage: true
				},
				props: true,
				name: 'GameCreationPage',
				component: () => import('../pages/games/GameCreationPage.vue'),
			},
			// {
			// 	path: '/games/:slug/',
			// 	meta: {
			// 		isGamePage: true
			// 	},
			// 	props: true,
			// 	name: 'GameCreationPage',
			// 	component: () => import('../pages/games/GameCreationPage.vue'),
			// }
		],
	},
];

export default routes;
