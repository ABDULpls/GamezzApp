<template>
	<div class="topbar">
		<img @click="$router.back()" src="../../assets/images/sprite.svg#arrow-left" alt="back"
			 class=" btn btn-back " width="10" height="17">
		<div class="chat-topbar">
			<img class="chat-topbar__img" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" width="43" height="43"
				 alt="chat-img">
			<div class="chat-topbar__name">{{ chat.secondUser?.name }}</div>
			<div class="chat-topbar__status">В сети</div>

		</div>
		<img src="../../assets/images/sprite.svg#game-options" alt="options" width="24" height="21" data="chat">
	</div>
	<div ref="chat" class="gamechat">
		<div :key="index" v-for="(message, index) in chat.messages" class="gamechat__row">
			<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="35.61"
				 height="35.61">
			<span class="gamechat__name" data="private-chat"> {{ message.user.name }}</span>
			<time class="gamechat__time">{{ message.date + ' ' + message.time }}</time>
			<span :class=" message.user.id === 1 ? 'gamechat__mymsg' : '' " class="gamechat__msg">{{ message.message }}</span>
		</div>
	</div>

	<form class="gamechat__textmsg">
		<input v-model="value" class="gamechat__input" type="text" placeholder="Сообщение">
		<button @click.prevent.stop ="sendMessage"  ><img  src="../../assets/images/sprite.svg#textbtn" alt="send" class="textbtn"></button>
	</form>
</template>

<script>
import chatApi from '../../api/chat.api.js';
import gamesApi from "../../api/games.api";

export default {
	name: "ChatPrivate",

	data() {
		return {
			value: '',
			chat: {}
		};
	},

	mounted() {
		this.scrollIntoView();
	},
	watch: {
		value() {
			console.log(this.value);
		}
	},
	created() {
		this.fetchMessages();
	},
	computed: {
		myMessage(message) {
			return {'gamechat__mymsg': message.user.id === 1};
		}
	},
	methods: {
		scrollIntoView() {
			this.$nextTick(()=> {
				this.$refs.chat.children[this.$refs.chat.childElementCount - 1].scrollIntoView()
			})
		},
		sendMessage() {
			this.chat.messages.push({
				message: this.value,
				//me
				user: {
					id: 1,
					name: 'Biba'
				},
				date: new Date().toLocaleDateString("ru-RU"),
				time: new Date().toLocaleTimeString("ru-RU"),
			});
			this.value = '';
			this.scrollIntoView();
		},
		async fetchMessages() {
			try {
				const response = await chatApi.fetchMessages();
				this.chat = response.data;
				console.log(this.chat);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style src="./css/gamechat.css">

</style>
