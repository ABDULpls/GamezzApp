<template>
	<router-view v-slot="{Component, route}">
		<transition :name="transitionName" mode="out-in">
			<div :key="route.path">
				<component :is="Component"/>
				<page-footer/>
			</div>
		</transition>
	</router-view>
</template>

<script>
import PageFooter from '../components/PageFooter.vue';
import store from "../store/store";
import router from "../router/router";

export default {
	name: 'MainLayout',
	components: {
		PageFooter,
	},
	inject: ['transitionName'],

	created() {
		// завести слушатель на награду
		//редирект на роут с наградой
		// setTimeout(() => {
		// 	this.$router.push({
		// 		name: 'BonusPage',
		// 	});
		// }, 2000);


		const unregisteredRouterGuard = router.beforeEach((to, from, next) => {
			// console.log(store.state.modalIsOpen);
			// if (to.name === 'ProfilePage' /*|| to.name === 'ChatDialogs' || to.name === 'ChatGlobal'*/) {
			// 	unregisteredRouterGuard();
			// 	next();
			// // console.log(store.state.modalIsOpen);
			// 	return;
			// }
			if (store.state.modalIsOpen) {
				store.dispatch('setModal',false)
				next(false);

			} else {
				unregisteredRouterGuard();
				next();
			}
			// console.log(store.state.modalIsOpen);
		});
	},
};
</script>

<style></style>
