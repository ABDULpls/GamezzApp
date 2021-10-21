<template>

	<router-link tag="div" :to="{name:'GamePage',params:{slug:game.slug}}" class="gamelist__item" :class="gameClasses">
		<picture class="gamelist__img">
			<source :srcset="gameImageWebpUrl" type="image/webp">
			<img height="88" :src="gameImageUrl" alt="Сапер">
		</picture>
		<div class="gamelist__game">
			<span class="gamelist__title">{{ game.title }}</span>
			<span class="gamelist__players">{{ game.playersCount }}</span>
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'GameListItem',
	props: {
		game: {
			type: Object,
			required: true,
		}
	},
	computed: {
		gameClasses() {
			return [
				'game-' + this.game.slug,
			];
		},
		gameImageUrl() {
			return 'https://cdn.gamezz.io/games/' + this.game.id + '_optimize.jpg';
		},
		gameImageWebpUrl() {
			return 'https://cdn.gamezz.io/games/' + this.game.id + '_optimize.webp';
		}
	}
};
</script>
