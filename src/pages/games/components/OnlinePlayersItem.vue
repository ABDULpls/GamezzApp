<template>
	<users-list-item class="online-player" :user="user">
		<template v-slot="{user}">
			<div class="online-player__icon">
				<img class="online-player__img" :src="user.avatar" width="42" height="42"
						 alt="player online">
				<img class="online-player__flag" :src="'/src/assets/images/lang.svg#'+user.locale" alt="flag" width="15" height="15">
			</div>
			<span class="online-player__name">{{ user.name }}</span>
			<button class="btn btn-right btn-right-grey"></button>
		</template>
	</users-list-item>
</template>

<script>
import UsersListItem from "../../../components/UsersList/UsersListItem.vue";

export default {
	name: "OnlinePlayersItem",
	components: {UsersListItem},
	props: {
		user: {
			type: Object,
			default: () => ({})
		}
	},
};
</script>

<style scoped>

</style>
