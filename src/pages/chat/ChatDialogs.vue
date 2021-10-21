<template>
	<div>

		<div class="topbar">
    		<span class="topbar__title topbar__left">Чат:&nbsp;
		<click-outside :handler="close">
      			<span @click.stop="toggleChatSelect" class="topbar__title text-gradient chat-mode">Личный</span>
				<transition appear name="scale-down" duration="500">
					<chat-select v-if="chatSelectScreen" :me="me"></chat-select>
				</transition>
		</click-outside>
			</span>

			<div class="miniprofile">
				<span class="miniprofile__level">10</span>
				<img class="miniprofile__icon" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="pic" width="35"
					 height="35">
				<span class="miniprofile__results stars">189</span>
				<span class="miniprofile__results crystals">12.8k</span>
			</div>
			<img @click="$router.back()" src="../../assets/images/sprite.svg#close" alt="close" class="topbar__close" width="17" height="17">
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
import {mapState} from "vuex";

export default {
	name: "ChatDialogs",
	components: {
		ChatSelect,
		ClickOutside
	},
	data() {
		return {
			chatSelectScreen: false,
			generalChatIsOpen: false,
		};
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
		}),
	},


	methods: {
		toggleChatSelect() {
			this.chatSelectScreen = !this.chatSelectScreen;
		},
		close() {
			console.log('closing');
			this.chatSelectScreen = false;
		},
		openGeneralChat() {
			console.log('gen chat open');
			this.generalChatIsOpen = true;
		}
	},

};
</script>

<style src="./css/dialogs.css">

</style>
