<template>
	<div class="topbar">
		<span class="topbar__title topbar__left">Дурак простой</span>
		<user-widget :user="me"/>

	</div>
	<div class="gamewait">
		<div class="gamewait-player__details">
			<span :class="betImage">{{ room.bet }}</span>
			<span class="player__time">{{ room.turnTime }}&nbsp;сек</span>
		</div>
		<div :key="player.id" v-for="player in room.players" class="profile-wait">
			<div class="profile-wait__icon">
				<img class="profile-wait__img" :src="player.avatar" width="45.58"
					 height="45.58" alt="pic">
				<span class="profile-wait__level">{{ player.level }}</span>
			</div>
			<div class="profile-wait__status">
				<span class="profile-wait__name">{{ player.name }}</span>
				<span v-if="room.players.length === room.maxPlayers"
					:class="{'indicator-ready': player.ready, 'indicator-wait': !player.ready}"
					class="profile-wait__indicator ">
					{{ player.ready ? 'Готов' : 'Ожидание' }}
				</span>
			</div>
			<div class="profile-wait__results">
				<span class="stars">177</span>
				<span class="crystals">7.9k</span>
			</div>
		</div>

		<div v-for="wait in (room.maxPlayers - room.players.length)" class="profile-wait player-wait">
			<span class="player-wait__text">Ожидание игрока</span>
		</div>
		<span :class="'team-wait' + room.players.length" class="gamewait__team team-wait ">{{ room.players.length }}&#47;{{ room.maxPlayers }}</span>
		<p class="team-text">Ожидание игроков...</p>
		<button @click="readyUp" class="ready btn-ready btn" :disabled="me.ready || room.players.length !== room.maxPlayers">Готов играть</button>
		<button @click="$router.back()" class="gamewait__exit btn">Закрыть комнату</button>

	</div>
</template>

<script>
import UserWidget from "../../components/ui/UserWidget.vue";


export default {
	name: "GameLobbyPage",
	components: {
		UserWidget
	},
	props: {
		gameString: String,
		meString: String,
		roomString: String,
		slug: String
	},
	data() {
		return {
			game: null,
			me: null,
			room: null,
			allPlayersConnected: false,
		};
	},
	computed: {
		betImage() {
			return {'player__crystals': this.room.betType === 'Crystals', 'player__rating': this.room.betType === 'Rating'};
		}
	},
	created() {
		try {
			if (this.gameString === undefined
				|| this.meString === undefined
				|| this.roomString === undefined) {
				this.$router.push({name: "HomePage"});
			} else {
				this.game = JSON.parse(this.gameString);
				this.me = JSON.parse(this.meString);
				this.room = JSON.parse(this.roomString);
			}

		} catch (e) {

		}
	},
	methods: {
		readyUp() {
			this.me.ready = true;
			for (let player of this.room.players) {
				if (player.id === this.me.id) {
					player.ready = true;
				}
			}
		}
	}
};
</script>

<style src="./css/gamewait.css">

</style>
