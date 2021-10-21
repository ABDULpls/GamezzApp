import api from '../config/api';
export default  {
	fetchGame(slug) {
		//return api.get('/api/fetchGame/'+slug, data);
		return Promise.resolve({
			data: {
				id: 2,
				name: 'Дурак простой',
				rating: 4,
				rules: '<h1>Играть в карты бесплатно</h1> '+
					'<p>Карты даа вот карты хоршо играть играй  карты с друзьями карты азарт выйгрыш</p> ' +
					'<h2>Карты дурак</h2>' +
					'<ul>' + '<br>'+
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'<li>а</li>' +
					' <li>аа</li>' +
					' <li>ааа</li>' +
					'</ul>',
				rooms: [
					{
						id: 14,
						type: 'single',
						status: 'play',
						locked: false,
						bet: null,
						turnTime: null,
						players:[
							{
								id: 1209,
								avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
								name: 'XxXxXxXxGalina77ruXxXxXxXxXxXxXxXxXxXxXxXx',
								level: '63',
								rating: '2',
								locale: "ru"
							}
						]
					},
					{
						id: 214,
						maxPlayers: 4,
						type: 'human',
						status: 'wait',
						locked: true,
						password: '123',
						bet: 900,
						betType: 'Rating',
						turnTime: 30,
						players:[
							{
								id: 1201,
								avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
								name: 'Himmler',
								level: '66',
								rating: '1488',
								locale: 'de'
							},

						]
					},
					{
						id: 215,
						maxPlayers: 4,
						type: 'human',
						status: 'wait',
						locked: false,
						bet: 9000,
						betType: 'Crystals',
						turnTime: 60,
						players:[
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
					{
						id: 215,
						maxPlayers: 3,
						type: 'human',
						status: 'play',
						locked: true,
						bet: 3000,
						betType: 'Crystals',
						turnTime: 60,
						players:[
							{
								id: 1707,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'Waluigi',
								level: '69',
								rating: '3',
								locale: 'it'
							},
							{
								id: 1101,
								avatar: "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
								name: 'Pipin',
								level: '22',
								rating: '3',
								locale: 'en'
							}
						]
					}
				]
			}

		});
	},
	fetchOnlinePlayers() {
		return Promise.resolve({
			data: [
				{
					id: 1209,
					avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
					name: 'VOVA',
					level: '13',
					rating: '2',
					locale: "de"
				},
				{
					id: 1207,
					avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
					name: 'Gena',
					level: '63',
					rating: '2',
					locale: "ru"
				},{
					id: 1208,
					avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
					name: 'Mumua',
					level: '88',
					rating: '2',
					locale: "it"
				},{
					id: 1210,
					avatar: "https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg",
					name: 'Abbosu',
					level: '23',
					rating: '2',
					locale: "ru"
				},



			]
		});
	}
}
