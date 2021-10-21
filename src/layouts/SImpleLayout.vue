<template>
	<router-view v-slot="{Component, route}">
		<transition :name="transitionName" mode="out-in">
			<div :key="route.path">
				<component :is="Component"/>
			</div>
		</transition>
	</router-view>
</template>

<script>

export default {
	name: 'SimpleLayout',
	inject: ['transitionName'],
};
</script>

<style></style>
