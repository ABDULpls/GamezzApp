<template>
    <div class="blacklist">
        <div class="topbar">
            <span class="topbar__title topbar__left">Черный список</span>
            <button class="btn btn-search" @click="searchBlackListScreen = true"></button>
        </div>

        <span class="blacklist__item">Пользователей: {{ blackList.length }}</span>

        <transition-group name="fade-slide" duration="500">
            <black-list-item
                v-for="user in blackList"
                :key="user.id"
                :user="user"
                @remove:user="onRemoveUser"
            />
        </transition-group>

        <black-list-screen-slider
            :users-list="users"
            v-model:is-open="searchBlackListScreen"
            @add:user="onAddUser"
            @remove:user="onRemoveUser"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex';
import profileApi from '../../../api/profile.api';

import BlackListItem from './components/BlackListItem.vue';
import BlackListScreenSlider from './components/BlackListScreenSlider.vue';

const tabs = {
    'all': 'Все',
    'online': 'Онлайн',
};

export default {
    name: 'ProfileBlackListPage',
    components: {
        BlackListItem,
        BlackListScreenSlider,
    },
    data() {
        return {
            users: [],
            blackList: [],

            currentTabKey: 'all',
            searchBlackListScreen: false,
        };
    },
    // Options
    tabs: tabs,

    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),

        filteredFriends() {
            if (this.currentTabKey === 'online') {
                return this.blackList.filter(user => user.isOnline);
            }

            return this.blackList;
        },
    },
    methods: {
        async fetchUserBlockList(userId) {
            try {
                const response = await profileApi.fetchUserBlackList(userId);
                this.blackList = response.data;
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
            user.isBlocked = true;
            this.blackList.push(user);
			this.$nextTick()
        },

        onRemoveUser(user) {
            // request
            user.isBlocked = false;
            this.blackList = this.blackList.filter(u => u !== user);
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
        this.fetchUserBlockList(this.me.id);
        this.fetchUsers();
    },

};
</script>

<style src="./css/blacklist.css"></style>
