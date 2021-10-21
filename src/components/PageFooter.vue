<template>
	<footer class="footer">
		<transition v-if="isGamePage" name="fade-slide" appear>
<!--			<router-link  tag="button" :to="{name:'ChatGlobal'}">-->
			<chat-preview />
<!--			</router-link>-->
		</transition>
		<chat-preview-in-game v-if="isInGame"/>

		<!--		<general-chat v-model:is-open="chatIsOpen"/>-->
		<span v-if="!hideMenu"
			  v-for="menuItem in menu"
			  class="footer__item footer-games"
			  :class="[
                menuItem.className,
                $route.name === menuItem.routeName && menuItem.className + '-active',
            ]"
			  @click="toPage(menuItem.routeName)">
            {{ menuItem.label }}
        </span>
	</footer>
</template>

<script>
import {PAGE_FOOTER_MENU} from '../config/config';
import ChatPreview from "./ui/chat-preview/ChatPreview.vue";
import ChatPreviewInGame from "./ui/chat-preview/ChatPreviewInGame.vue";
import {mapState} from "vuex";
import GeneralChat from "../pages/chat/components/GameChat.vue";

export default {
	name: 'PageFooter',
	components: {
		ChatPreview,
		ChatPreviewInGame,
		GeneralChat
	},
	inject: ['toPage'],
	data() {
		return {
			menu: PAGE_FOOTER_MENU,
		};
	},
	computed: {
		...mapState({
			isGamePage: state => state.isGamePage,
			isInGame: state => state.isInGame,
			hideMenu: state => state.hideMenu,
			modalIsOpen: state => state.modalIsOpen

		})
	},
	created() {
		// const unregisteredRouterGuard = this.$router.beforeResolve((to, from, next) => {
		// console.log(from.name)
		// 	// if(from.name === 'GamePage' && !this.chatIsOpen) {
		// 	// 	next()
		// 	// 	return;
		// 	// }
		// 	if (to.name === 'ProfilePage') {
		// 		console.log(4);
		// 		return;
		// 	}
		// 	if (this.chatIsOpen) {
		// 		console.log(5);
		// 		next(false);
		// 		this.chatIsOpen = false;
		// 	} else {
		// 		console.log(6);
		// 		unregisteredRouterGuard();
		// 		next();
		// 	}
		// });
	}

};
</script>
