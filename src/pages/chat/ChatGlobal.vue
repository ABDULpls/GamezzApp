<template>
	<div class="topbar">
				<span class="topbar__title topbar__left">Чат:&nbsp;
		<click-outside :handler="close">
      			<span @click.stop="toggleChatSelect" class="topbar__title text-gradient chat-mode">Общий</span>
				<transition appear name="scale-down" duration="500">
					<chat-select v-if="chatSelectScreen" :me="me"></chat-select>
				</transition>
		</click-outside>
			</span>
		<user-widget :user="me"/>
		<button @click="$router.back()" class="btn btn-close"></button>
	</div>
	<div ref="chat" class="gamechat">
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="35.61" height="35.61">
			</div>
			<span class="gamechat__name gamechat-options" data="public-chat">InKey</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg">Всем привет</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Привет</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="35.61" height="35.61">
			</div>
			<span class="gamechat__name gamechat-options" data="public-chat">InKey</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg">Всем удачи и хорошей игры</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="35.61" height="35.61">
			</div>
			<span class="gamechat__name gamechat-options" data="public-chat">Danil 83</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg">Спасибо</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Спс)</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Спс)</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Спс)</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Спс)</span>
		</div>
		<div class="gamechat__row">
			<div class="gamechat__card rus">
				<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
					 height="35.61">
			</div>
			<span class="gamechat__name">Narntt</span>
			<time class="gamechat__time">12.01 16.40</time>
			<span class="gamechat__msg gamechat__mymsg">Спс)</span>
		</div>

	</div>
		<form class="gamechat__textmsg">
			<input class="gamechat__input" type="text" placeholder="Сообщение">
			<img @click="scrollToBottom" src="../../assets/images/sprite.svg#textbtn" alt="send" class="textbtn">
		</form>
</template>

<script>
import UserWidget from "../../components/ui/UserWidget.vue";
import ScreenSlider from "../../components/screen-slider/ScreenSlider.vue";
import ChatSelect from "./components/ChatSelect.vue";
import ClickOutside from "../../components/ClickOutside.vue";
import {mapState} from "vuex";

export default {
	name: "ChatGlobal",
	components: {
		UserWidget,
		ScreenSlider,
		ChatSelect,
		ClickOutside
	},
	emits: {
		'update:is-open': null,
	},
	computed: {
		...mapState({
			me: state => state.auth.user
		}),

	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			chatSelectScreen: false
		};
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		toggleChatSelect() {
			console.log('toggle');
			this.chatSelectScreen = !this.chatSelectScreen;
		},
		close() {
			this.chatSelectScreen = false;

		},


	},
	mounted() {
		this.$nextTick(()=> {
			this.$refs.chat.children[this.$refs.chat.childElementCount - 1].scrollIntoView()

		})
	},

	watch: {
		isOpen() {
			// const chat = document.querySelector('.gamechat');
			// chat.scrollTop = chat.clientHeight;
			// let scrollHeight = this.$refs.chat.scrollHeight;
			// window.scrollTo(0, scrollHeight);
		}
	}
};
</script>

<style src="./css/gamechat.css">

</style>
