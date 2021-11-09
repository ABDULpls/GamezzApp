import api from '../config/api';
export default  {
	fetchTournaments() {
		//return api.get('/api/fetchGame/'+slug, data);
		return Promise.resolve({
			data: {
				tournaments: [
					{ 	id: 1,
						game: 'Реверси',
						img: "https://cdn.gamezz.io/games/14_optimize.webp",
						maxPlayers: 50,
						minLvl: 3,
						bet: 1000,
						prize: 100000,
						startDate: Date.now(),
						startTime: '21:30',
						participants: [
							{
								id:1,
							},
							{
								id: 1202,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'human',
								level: '6',
								rating: '11',
								locale: 'de'
							},
							{
								id: 1207,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'monke',
								ready: true,
								level: '11',
								rating: '13',
								locale: 'es'
							},
							{
								id: 1206,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'doge',
								level: '12',
								rating: '15',
								locale: 'fr'
							},
						]
					},
					{ 	id: 2,
						game: 'Домино',
						img: "https://cdn.gamezz.io/games/14_optimize.webp",
						maxPlayers: 20,
						minLvl: 10,
						bet: 10000,
						prize: 100000000,
						startDate: Date.now(),
						startTime: '11:30',
						participants: [
							{
								id: 1202,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'human',
								level: '6',
								rating: '11',
								locale: 'de'
							},
							{
								id: 1207,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'monke',
								ready: true,
								level: '11',
								rating: '13',
								locale: 'es'
							},
							{
								id: 1206,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'doge',
								level: '12',
								rating: '15',
								locale: 'fr'
							},
						]
					}
				],

			}

		});
	},

}
