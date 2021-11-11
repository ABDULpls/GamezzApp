<template>
	<div style="overflow: visible">
		<div class="topbar topbar-dark">
			<!--		<button class="btn btn-back topbar__left" ></button>-->
			<router-link tag="button" class="btn btn-back topbar__left" :to="{name:'HomePage'}"></router-link>
				<user-widget :user="me"/>

			<router-link tag="button" :to="{name: 'FamePage'}" class="btn btn-cup "></router-link>
		</div>

		<div ref="room" class="room">
			<span class="room__title">Дурак простой</span>
			<img @click.prevent.self.stop="gameRatingModal=true" src="../../assets/images/sprite.svg#header-rating" alt="rating" width="106" height="20">
			<span @click="openOnlinePlayers" class="room__online flex-v-center">86&nbsp;онлайн&nbsp;&rsaquo;</span>
			<span @click="openRules" class="room__rules flex-v-center">Правила&nbsp;&rsaquo;</span>
			<ul class="scroll">
				<li class="scroll__item room__item room__item-active">1 комната</li>
				<li class="scroll__item room__item">2 комната</li>
				<li class="scroll__item room__item">3 комната</li>
			</ul>

			<ul v-if="game.rooms" class="room__filters">
				<li v-for="(filter,key) in filters" @click="selectFilter(key)" :class="filterClasses(key)" class="room__filter ">{{ filter.name }}
					({{ filter.value }})
				</li>
			</ul>
			<room-list :me="me" :game="game" :rooms="filteredRooms"/>
			<router-link tag="button" :to="{name: 'GameCreationPage'}">
				<button @click="createRoom" class="btn players__add"/>
			</router-link>
		</div>
		<online-players-screen-slider
			:me="me"
			v-model:is-open="onlinePlayersScreen"
			:online-users-list="onlinePlayers"/>

		<rules-screen-slider
			:me="me"
			v-model:is-open="rulesScreen"
			:rules="game.rules"/>


		<modal-dialog v-model:is-open="gameRatingModal">
			<template #title>
				Оцените игру {{ game.name }}
			</template>
			<template #body>
				<game-rating-stars/>
				<button class="btn modal__button btn-orange">Оценить</button>
			</template>
		</modal-dialog>

	</div>
</template>

<script>
import gamesApi from '../../api/games.api';
import GameLobbyPage from "./GameLobbyPage.vue";
import ModalDialog from "../../components/modal-dialog/ModalDialog.vue";
import GameRatingStars from "../../components/GameRatingStars.vue";
import UserWidget from "../../components/ui/UserWidget.vue";
import OnlinePlayersScreenSlider from "./components/OnlinePlayersScreenSlider.vue";
import RoomList from "./components/RoomList.vue";
import RulesScreenSlider from "./components/RulesScreenSlider.vue";
import BaseSelect from "../../components/ui/select/BaseSelect.vue";
import GeneralChat from "../chat/components/GameChat.vue";
import {DEFAULT_ROOM_FILTER_KEY} from "../../config/game";
import {mapState} from "vuex";

export default {
	name: "GamePage",
	components: {
		GameLobbyPage,
		GeneralChat,
		BaseSelect,
		GameRatingStars,
		ModalDialog,
		RulesScreenSlider,
		UserWidget,
		RoomList,
		OnlinePlayersScreenSlider,

	},
	props: {
		slug: {
			type: String,
		}
	},
	data() {
		return {
			game: {},
			filteredRooms: [],
			currentFilter: DEFAULT_ROOM_FILTER_KEY,
			filters: {
				all: {value: 0, name: "Все"},
				wait: {value: 0, name: "Ожидают"},
				play: {value: 0, name: "Играют"},
			},
			rules: '',
			gameRatingModal: false,
			onlinePlayersScreen: false,
			rulesScreen: false,
			generalChatScreen: false,
			inputValue: '',
			onlinePlayers: [],
		};
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
			chatIsOpen: state => state.chatIsOpen,
			modalIsOpen: state => state.modalIsOpen
		}),
	},

	watch: {
		modalIsOpen(state, prevState){
			if (state === false && prevState === true) {
				this.gameRatingModal = false;
				this.onlinePlayersScreen = false;
				this.rulesScreen = false;
			}
		},
		currentFilter() {
			if (this.currentFilter === DEFAULT_ROOM_FILTER_KEY)
				this.filteredRooms = this.game.rooms;
			else
				this.filteredRooms = this.game.rooms.filter(el => el.status === this.currentFilter);
		},
		rulesScreen() {
			this.$store.dispatch('setModal', this.gameRatingModal || this.onlinePlayersScreen || this.rulesScreen)
			if (this.rulesScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
		// generalChatScreen() {
		// 	if (this.generalChatScreen)
		// 		document.querySelector('body').style.overflowY = 'hidden';
		// 	else
		// 		document.querySelector('body').style.overflowY = 'auto';
		// },
		onlinePlayersScreen() {
			this.$store.dispatch('setModal', this.gameRatingModal || this.onlinePlayersScreen || this.rulesScreen)
			if (this.onlinePlayersScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
		gameRatingModal() {
			this.$store.dispatch('setModal', this.gameRatingModal || this.onlinePlayersScreen || this.rulesScreen)
			if (this.gameRatingModal)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},


	},
	methods: {
		async fetchGame(slug) {
			try {
				const response = await gamesApi.fetchGame(slug);
				this.game = response.data;
				this.filteredRooms = [...this.game.rooms];
				this.rules = this.game.rules;
				this.filters.wait.value = this.filteredRooms.filter(el => el.status === 'wait').length;
				this.filters.all.value = this.filteredRooms.length;
				this.filters.play.value = this.filters.all.value - this.filters.wait.value;
			} catch (err) {
				console.log(err);
			}
		},
		async fetchOnlinePlayers() {
			try {
				const response = await gamesApi.fetchOnlinePlayers();
				this.onlinePlayers = response.data;
			} catch (err) {
				console.log(err);
			}
		},
		filterClasses(key) {
			return {'room__filter-active': key === this.currentFilter};
		},
		selectFilter(key) {
			if (typeof key !== 'string')
				key = '';
			this.currentFilter = key;
		},
		closeGameRating() {
			this.gameRatingModal = false
		},
		openOnlinePlayers() {
			this.onlinePlayersScreen = true;
		},
		openRules() {
			this.rulesScreen = true;

		},
		openGeneralChat() {
			this.generalChatScreen = true;
		},
		enterLockedRoom() {
			this.lockedRoomScreen = true;
		},

	},
	created() {
		this.fetchGame(this.slug);
		this.fetchOnlinePlayers();
	},

};
</script>

<style src="./css/room.css">

</style>
