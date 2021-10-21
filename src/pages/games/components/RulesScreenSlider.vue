<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">
			<div class="topbar">
				<span class="topbar__title topbar__left">Правила игры</span>
				<user-widget :user="me"/>
				<button @click="close" class="btn btn-close"></button>
			</div>
		</template>
		<template #content >
			<div class="gamerules" v-html="rules"></div>
		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from '../../../components/screen-slider/ScreenSlider.vue';
import UserWidget from "../../../components/ui/UserWidget.vue";


export default {
	name: 'RulesScreenSlider',
	components: {
		UserWidget,
		ScreenSlider,
	},
	emits: {
		'update:is-open': null,
	},
	props: {
		onlineUsersList: {
			type: Array,
			default: () => [],
		},
		rules: String,
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
<style src="../css/gamerules.css"></style>
