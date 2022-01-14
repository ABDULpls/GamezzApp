<template>
	<div>
		<div class="player__card">
			<img class="player__img" :src="visiblePlayer.avatar" alt="player" width="46"
				 height="46">
			<img :src="'/src/assets/images/lang.svg#'+visiblePlayer.locale" alt="flag" class="player__flag" width="18" height="18">
		</div>
		<div class="player__info">
			<span class="player__name player__shield-green">{{ visiblePlayer.name }}</span>
			<span class="player__level">{{ visiblePlayer.level }}</span>
			<span class="player__gist">{{ visiblePlayer.rating }}</span>
		</div>
		<button @click="onPlayButton" :class="buttonClasses" class="player__button ">{{ buttonLabel }}</button>
		<div v-if="room.type !=='single'" class="player__details">
			<span v-if="room.bet" :class="betImage">{{ room.bet }}</span>
			<span v-if="room.turnTime" class="player__time">{{ room.turnTime }} сек</span>
			<span v-if="room.maxPlayers" :class="'player__team' + playersCount" class="player__team">
				{{ playersCount }}/{{ room.maxPlayers }}
			</span>
		</div>
		<locked-room-screen-slider :me="me" :game="game" :room="room" v-model:is-open="lockedRoomScreen"/>
		<room-screen-slider :room="room" :game="game" :me="me" v-model:is-open="openRoomScreen"/>
	</div>
</template>

<script>
import LockedRoomScreenSlider from "./LockedRoomScreenSlider.vue";
import RoomScreenSlider from "./RoomScreenSlider.vue";
import {mapState} from "vuex";
export default {
	name: "RoomListItem",
	components: {
		LockedRoomScreenSlider,
		RoomScreenSlider
	},
	props: {
		room: {
			type: Object,
			default: () => ({})
		},
		me: {
			type: Object,
			required: true,
		},
		game: {
			type: Object,
			required: true,
		}
	},

	data() {
		return {
			lockedRoomScreen: false,
			openRoomScreen: false,
		};
	},
	computed: {
			...mapState({
				modalIsOpen: state => state.modalIsOpen
			}),
		buttonClasses() {
			return {
				'player__button-inactive': this.room.status === "play",
				'player__lock': this.room.locked
			};
		},
		visiblePlayer() {
			return this.room.players[0];
		},
		playersCount() {
			return this.room.players.length;
		},
		buttonLabel() {
			return this.room.status === 'play' ? 'В игре' : 'Играть';
		},
		betImage() {
			return {'player__crystals': this.room.betType === 'Crystals', 'player__stars': this.room.betType === 'Rating'}
		}
	},
	watch:{
		modalIsOpen(state, prevState) {
			if (state === false && prevState === true) {
				this.openRoomScreen = false;
				this.lockedRoomScreen = false;
			}
		},
		openRoomScreen() {
			this.$store.dispatch('setModal', this.openRoomScreen);
			if (this.openRoomScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
		lockedRoomScreen() {
			this.$store.dispatch('setModal', this.lockedRoomScreen);
			if (this.lockedRoomScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
	},
	methods: {
		onPlayButton() {
			if (this.room.status === 'wait') {
				if (this.room.locked) {
					this.enterLockedRoom();
				} else {
					this.enterOpenRoom()

				}
			}
		},
		enterLockedRoom() {
			this.lockedRoomScreen = true;
		},
		enterOpenRoom() {
			this.openRoomScreen = true;
		}
	},
	created() {
		const unregisteredRouterGuard = this.$router.beforeEach((to, from, next) => {
			if (this.lockedRoomScreen) {
				next(false);
				this.lockedRoomScreen = false;
			} else {
				unregisteredRouterGuard();
				next();
			}
		});
	}
};
</script>

<style scoped>

</style>
