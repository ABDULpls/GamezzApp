<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">
			<div class="topbar">
				<span class="topbar__title topbar__left">Игроки онлайн: {{onlineUsersList.length}}</span>
				<user-widget :user="me"/>
			<button @click="close" class="btn btn-close"></button>
			</div>
		</template>
		<template #content>
			<div class="online-players">
				<online-players-item :key="user.id" v-for="user in onlineUsersList" :user="user" />
			</div>
				<button class="online-players__btn">Показать еще игроков</button>
		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from '../../../components/screen-slider/ScreenSlider.vue';
import UserWidget from "../../../components/ui/UserWidget.vue";
import OnlinePlayersItem from "./OnlinePlayersItem.vue";
export default {
	name: 'OnlinePlayersScreenSlider',
	components: {
		UserWidget,
		ScreenSlider,
		OnlinePlayersItem,
	},
	emits: {
		'update:is-open': null,
	},
	props: {
		onlineUsersList: {
			type: Array,
			default: () => [],
		},
		me: {
			type: Object,
			default: () => ({})
		},
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
	}
};
</script>
<style src="../css/online-players.css"></style>
