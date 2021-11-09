<template>
	<div>
		<div class="topbar">
				<span class="topbar__title topbar__left">Чат:&nbsp;
		<click-outside :handler="close">
      			<span @click.stop="toggleChatSelect"
					  class="topbar__title text-gradient chat-mode">
					Личный
				</span>
				<transition appear name="scale-down" duration="500">
					<chat-select
							v-if="chatSelectScreen"
							:chat="chat"
							:me="me">
                    </chat-select>
				</transition>
		</click-outside>
			</span>
			<user-widget :user="me"/>
			<button @click="$router.back()" class="btn btn-close"></button>
		</div>




		<div class="dialogs">

			<router-link tag="button" :to="{name:'ChatPrivate'} ">
				<div class="dialog">

					<div class="dialog__card">
						<img src="https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg" alt="player" width="48" height="48"
							 class="dialog__img">
						<div class="dialog__online"></div>
					</div>
					<span class="dialog__name">Barsik<b class="newmsg">1</b></span>
					<span class="dialog__time">12.01.20</span>
					<span class="dialog__msg">Я создал, давай подключайся</span>

				</div>
			</router-link>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">Sinderella<b class="newmsg">3</b></span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">Treena</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>

			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>
			<div class="dialog">
				<div class="dialog__card">
					<img src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg" alt="player" width="48" height="48"
						 class="dialog__img">
					<div class="dialog__online"></div>
				</div>
				<span class="dialog__name">GameTycon</span>
				<span class="dialog__time">12.01.20</span>
				<span class="dialog__msg">Я создал, давай подключайся</span>
			</div>

		</div>

	</div>
</template>

<script>
import ChatSelect from "./components/ChatSelect.vue";
import ClickOutside from "../../components/ClickOutside.vue";
import UserWidget from "../../components/ui/UserWidget.vue";
import {mapState} from "vuex";
import chatApi from "../../api/chat.api";

export default {
	name: "ChatDialogs",
	components: {
		ChatSelect,
		ClickOutside,
		UserWidget
	},
	data() {
		return {
			chatSelectScreen: false,
			generalChatIsOpen: false,
			chat: {},
		};
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
		}),
	},

	created() {
		this.fetchChat();
	},
	methods: {
		toggleChatSelect() {
			this.chatSelectScreen = !this.chatSelectScreen;
		},
		close() {
			this.chatSelectScreen = false;
		},
		openGeneralChat() {
			this.generalChatIsOpen = true;
		},
		async fetchChat() {
			try {
				const response = await chatApi.fetchChat();
				this.chat = response.data;
				console.log(this.chat);
			} catch (err) {
				console.log(err);
			}
		},
	},

};
</script>

<style src="./css/dialogs.css">

</style>
