<template>
	<div>
		<div class="topbar">
			<span class="topbar__title topbar__left">Мои друзья</span>
			<button class="btn btn-search" @click="searchFriendsScreen = true"></button>
		</div>
		<div class="friends">
			<div class="friends__details">
				<span class="friends__heading">У вас {{ friends.length }} друзей</span>
				<span
					class="friends__mode"
					v-for="(tab, key) in $options.tabs"
					:class="currentTabClasses(key)"
					@click="changeTab(key)"
				>{{ tab }}</span>
			</div>

			<transition-group name="fade-slide" duration="500">
				<friend-list-item
					v-for="friend in filteredFriends"
					:key="friend.id"
					:friend="friend"
					@remove:user="onRemoveUser"
				/>
			</transition-group>
		</div>

		<friend-screen-slider
			:users-list="users"
			v-model:is-open="searchFriendsScreen"
			@add:user="onAddUser"
			@remove:user="onRemoveUser"
		/>
	</div>
</template>

<script>
import {mapState} from 'vuex';
import profileApi from '../../../api/profile.api';

import FriendListItem from './components/FriendListItem.vue';
import FriendScreenSlider from './components/FriendScreenSlider.vue';

const tabs = {
	'all': 'Все',
	'online': 'Онлайн',
};

export default {
	name: 'ProfileFriendsPage',
	components: {
		FriendListItem,
		FriendScreenSlider,
	},
	data() {
		return {
			users: [],
			friends: [],

			currentTabKey: 'all',
			searchFriendsScreen: false,
		};
	},
	// Options
	tabs: tabs,

	computed: {
		...mapState({
			me: state => state.auth.user,
		}),

		filteredFriends() {
			this.$nextTick();
			if (this.currentTabKey === 'online') {
				return this.friends.filter(friend => friend.isOnline);
			}

			return this.friends;
		},
	},
	methods: {
		async fetchUserFriends(userId) {
			try {
				const response = await profileApi.fetchUserFriends(userId);
				this.friends = response.data;
			} catch (error) {
				console.log(error);
			}
		},

		async fetchUsers() {
			try {
				const response = await profileApi.fetchUsers();
				this.users = response.data;
			} catch (error) {
				console.log(error);
			}
		},

		onAddUser(user) {
			// request
			user.isFriend = true;
			this.friends.push(user);
		},

		onRemoveUser(user) {
			// request
			user.isFriend = false;
			this.friends = this.friends.filter(f => f !== user);
		},

		changeTab(key) {
			this.currentTabKey = key;
		},

		currentTabClasses(key) {
			return {
				'friends__mode-active': this.currentTabKey === key,
			};
		},
	},
	created() {
		this.fetchUserFriends(this.me.id);
		this.fetchUsers();
	},

};
</script>

<style src="./css/friends.css"></style>
