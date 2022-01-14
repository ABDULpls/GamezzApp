export default {
	fetchChat() {
		return Promise.resolve({
			data: {
				chats: [
					{
						type: 'private',
						name: "Личный",
						usersInChat: 5,
						imgSrc: "../src/assets/images/sprite.svg#chat-private",
						routerTo: "ChatDialogs"
					},
					{
						type: 'global',
						name: "Общий",

						usersInChat: 2048,
						imgSrc: "../src/assets/images/sprite.svg#chat-public",
						routerTo: "ChatGlobal"
					},
					{
						type: 'russian',
						name: "Русский",
						usersInChat: 1945,
						imgSrc: "../src/assets/images/lang.svg#ru",
						routerTo: "ChatDialogs"
					},
					{
						type: 'english',
						name: "English",
						usersInChat: 665,
						imgSrc: "../src/assets/images/lang.svg#en",
						routerTo: "ChatDialogs"
					},
					{
						type: 'french',
						name: "French",
						usersInChat: 15,
						imgSrc: "../src/assets/images/lang.svg#fr",
						routerTo: "ChatDialogs"
					},
					{
						type: 'italian',
						name: "Italian",
						usersInChat:55,
						imgSrc: "../src/assets/images/lang.svg#it",
						routerTo: "ChatDialogs"
					},
					{
						type: 'spanish',
						name: "Spanish",
						usersInChat: 213,
						imgSrc: "../src/assets/images/lang.svg#es",
						routerTo: "ChatDialogs"
					},
				],
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
							name: 'BobaTheFett'
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
