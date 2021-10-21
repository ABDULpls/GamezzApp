export default {
	fetchMessages() {
		return Promise.resolve({
			data: {
				firstUser: {
					id: 1,
					name: 'Biba'
				},
				secondUser: {
					id: 2,
					name: 'Boba'
				},
				messages: [
					{
						user: {
							id: 1,
							name: 'Biba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'aye papasha'
					},
					{
						user: {
							id: 2,
							name: 'Boba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'fartuk v masle'
					},
					{
						user: {
							id: 1,
							name: 'Biba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'aye papasha'
					},
					{
						user: {
							id: 1,
							name: 'Biba'
						}, date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'aye papasha'
					},
					{
						user: {
							id: 1,
							name: 'Biba'
						}, date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'aye papasha'
					},
					{
						user: {
							id: 2,
							name: 'Boba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'fartuk v masle'
					},
					{
						user: {
							id: 2,
							name: 'Boba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'fartuk v masle'
					},
					{
						user: {
							id: 2,
							name: 'Boba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'fartuk v masle'
					},
					{
						user: {
							id: 2,
							name: 'Boba'
						},
						date: new Date().toLocaleDateString("ru-RU"),
						time: new Date().toLocaleTimeString("ru-RU"),
						message: 'fartuk v masle'
					},
				]
			}
		});
	}
};
