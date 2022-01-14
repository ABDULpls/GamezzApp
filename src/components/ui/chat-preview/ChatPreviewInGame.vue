<template>
	<game-chat :chat="chat" v-model:is-open="gameChatScreen"
	/>
	<div @click="openGameChat" class="chat">
		<div class="chat__row">
			<time class="chat__time">{{showPreviewTime}}</time>
			<span class="chat__user">{{showPreviewUser + ':'}}</span>
			<span class="chat__message">{{showPreviewMessage}}</span>
		</div>
		<img src="../../../assets/images/sprite.svg#chat-collapse" alt="chat" class="chat__icon" width="10" height="7">
	</div>

</template>

<script>
import GameChat from "../../../pages/chat/components/GameChat.vue";
import chatApi from "../../../api/chat.api";
import {mapState} from "vuex";

export default {
	name: "ChatPreviewInGame",
	components: {
		GameChat
	},
	data() {
		return {
			gameChatScreen: false,
			chat: {},
			previewTime: ''
		};
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
			chatIsOpen: state => state.chatIsOpen,
			modalIsOpen: state => state.modalIsOpen
		}),
		showPreviewTime() {
			if (this.chat.messages)
				return this.chat.messages[this.chat.messages.length - 1].time.split('').slice(0, 5).join('');
		},
		showPreviewUser(){
			if (this.chat.messages)
				return this.chat.messages[this.chat.messages.length - 1].user.name.slice(0,6)
		},
		showPreviewMessage() {
			if (this.chat.messages)
				return this.chat.messages[this.chat.messages.length - 1].message
		}

	},
	created() {
		this.fetchMessages();
	},
	watch: {
		gameChatScreen() {
			this.$store.dispatch('setModal', this.gameChatScreen);
		},
		modalIsOpen() {
			this.gameChatScreen = this.modalIsOpen;
		}
	},
	methods: {
		async fetchMessages() {
			try {
				const response = await chatApi.fetchChat();
				this.chat = response.data;
				console.log(this.chat.messages[this.chat.messages.length - 1].message);

			} catch (err) {
				console.log(err);
			}
		},
		openGameChat() {
			this.gameChatScreen = true;
		},
	}
};
</script>

<style src="./chatcollapse.css">

</style>
