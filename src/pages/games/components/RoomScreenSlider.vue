<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">
			<div class="topbar">
				<span class="topbar__title topbar__left">{{ game.name }}</span>

				<button @click="close" class="btn btn-close"></button>

			</div>
		</template>
		<template #content>
			<div class="gamewait">
				<div :key="player.id" v-for="player in room.players" class="profile-wait">
					<div class="profile-wait__icon">
						<img class="profile-wait__img" :src="player.avatar" width="45.58"
							 height="45.58" alt="pic">
						<span class="profile-wait__level">{{ player.level }}</span>
					</div>
					<span class="profile-wait__name">{{ player.name }}</span>
					<div class="profile-wait__results">
						<span class="stars">177</span>
						<span class="crystals">7.9k</span>
					</div>
				</div>

				<div
					:key="playerNumber"
					v-for="playerNumber in (room.maxPlayers - room.players.length || 0)"
					class="profile-wait player-wait">
					<span class="player-wait__text">Ожидание игрока</span>
				</div>
				<span
					:class="'team-wait' + room.players.length"
					class="gamewait__team team-wait ">
					{{ room.players.length }}&#47;{{ room.maxPlayers }}
				</span>
				<span class="player-wait__team">Ожидание игроков...</span>
				<button @click="openLobby" class="btn gamewait__btn btn-orange">Присоединиться</button>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import UserWidget from "../../../components/ui/UserWidget.vue";
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";

export default {
	name: "OpenRoomScreenSlider",
	components: {
		UserWidget,
		ScreenSlider
	},
	emits: {
		'update:is-open': null,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		me: {
			type: Object,
			required: true,
		},
		game: {
			type: Object,
			required: true,
		},
		room: {
			type: Object,
			required: true
		}
	},

	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		openLobby() {
			this.onUpdateIsOpen(false)
			this.room.players.push(this.me);
			this.$router.push({
				name: 'GameLobbyPage',
				params: {
					meString: JSON.stringify(this.me),
					gameString: JSON.stringify(this.game),
					roomString: JSON.stringify(this.room)
				}
			});
		}
	},
};
</script>

<style scoped>

</style>
