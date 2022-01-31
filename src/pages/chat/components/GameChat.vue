<template>
	<screen-slider transition-name="slide-in-up" :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">
			<div class="topbar">
				<span class="topbar__title topbar__left">Чат игры&nbsp;

    			</span>
				<user-widget :user="me"/>
				<button @click="close" class="btn btn-close"></button>
			</div>

		</template>
		<template #content>
			<div ref="chat" class="gamechat">
				<div class="useraction__dropdown-wrapper">
					<click-outside :handler="closeUserDropdown">
						<transition appear name="scale-down" duration="300">

							<user-action-dropdown v-if="userDropdownIsOpen" :clientX="userDropdownX" :clientY="userDropdownY"
												  :user="dropDownUser"/>
						</transition>
					</click-outside>
				</div>
				<div class="gamechat__players">
					<div class="gamechat__hide">
						<img class="gamechat__player" src="https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg" alt="player" width="35.61"
							 height="35.61">
					</div>
					<img class="gamechat__player" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="35.61"
						 height="35.61">
					<img class="gamechat__player" src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="35.61"
						 height="35.61">
					<img class="gamechat__player" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
						 height="35.61">
				</div>
				<div :key="index" v-for="(message, index) in chat.messages" class="gamechat__row">
					<img class="gamechat__img" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="35.61"
						 height="35.61">
					<div class="gamechat__name-container" >

						<span class="gamechat__name" data="private-chat"> {{ message.user.name }}</span>
						<div @click.stop.prevent="openUserDropdown($event,message)"
							 :class="{'gamechat-options': message.user.id !== 1}">
						</div>
					</div>
					<time class="gamechat__time">{{ message.date + ' ' + message.time }}</time>
					<span :class=" message.user.id === me.id ? 'gamechat__mymsg' : '' " class="gamechat__msg">{{ message.message }}</span>
				</div>

				<form class="gamechat__textmsg">
					<input v-model="value" class="gamechat__input" type="text" autocomplete="off" placeholder="Сообщение">
					<button @click.prevent.stop="sendMessage">
						<img src="../../../assets/images/sprite.svg#textbtn" alt="send" class="textbtn">
					</button>
				</form>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import UserWidget from "../../../components/ui/UserWidget.vue";
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import ChatSelect from "./ChatSelect.vue";
import UserActionDropdown from "./UserActionDropdown.vue";
import ClickOutside from "../../../components/ClickOutside.vue";
import {mapState} from "vuex";
import chatApi from "../../../api/chat.api";

export default {
	name: "GameChat",
	components: {
		UserWidget,
		ScreenSlider,
		ChatSelect,
		UserActionDropdown,
		ClickOutside
	},
	emits: {
		'update:is-open': null,
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
			modalIsOpen: state => state.modalIsOpen
		}),

	},
	watch: {
		value() {
			console.log(this.value);
		}
	},
	mounted() {
	},

	created() {
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		chat: {
			type: Object,
		}
	},
	data() {
		return {
			chatSelectScreen: false,
			value: '',
			userDropdownIsOpen: false,
			userDropdownX: 0,
			userDropdownY: 0,
			dropDownUser: null,
		};
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
			this.scrollIntoView();
		},
		close() {
			this.chatSelectScreen = false;
		},

		open() {
			this.$emit('update:is-open', true);
		},
		openUserDropdown(e, message) {
			document.querySelector('.slide-page').style.overflowY = 'auto';
			this.userDropdownIsOpen = true;
			this.userDropdownX = e.pageX - 70;
			this.userDropdownY = e.clientY + document.querySelector('.slide-page').scrollTop;
			this.dropDownUser = message.user;
			if (!this.userDropdownX || !this.userDropdownY)
				this.userDropdownIsOpen = false;
		},
		closeUserDropdown() {
			console.log('close userropdown');
			this.userDropdownIsOpen = false;
		},
		scrollIntoView() {
			console.log('waiting 1 sec');
			setTimeout(() => {

				console.log('scrolling  into view after 1 sec');
				this.$refs.chat.children[this.$refs.chat.childElementCount - 2].scrollIntoView();
			}, 1000);
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

	},

};
</script>

<style src="../css/gamechat.css">

</style>
