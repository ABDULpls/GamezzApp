<template>
    <div class="topbar">
        <span class="topbar__title topbar__left">Мой профиль</span>
        <img src="../../assets/images/sprite.svg#profile-edit" alt="edit" width="21" height="21">
    </div>
    <div class="profile">

        <profile-user-card :user="me" />

        <div class="profile-lvl">
            <span class="profile-lvl__value">46</span>
            <div class="profile-lvl__progress">
                <span>23,991</span><span class="profile-lvl__text">&nbsp;&#47;&nbsp;121,545 exp</span>
                <span class="profile-lvl__percent">88%</span>
                <div class="profile-lvl__progressbar"></div>
            </div>
        </div>

        <span class="profile__heading">Статистика</span>
        <div class="profile__stat">
            <span class="profile__rating-text">Место в общем рейтинге</span>
            <span class="profile__rating">#15
                <span class="profile__up">2 за сутки</span>
                <span class="profile__top100 btn-orange">ТОП-100</span>
              </span>
            <span class="profile__stat-details">2,877</span>
            <span class="profile__stat-details">52,6%</span>
            <span class="profile__stat-details">1,533</span>
            <span class="profile__stat-label">Сыграно игр</span>
            <span class="profile__stat-label">Процент побед</span>
            <span class="profile__stat-label">Количество побед</span>
        </div>


        <profile-rewards
            :rewards="rewards"
        />

        <profile-favorite-games
            :games="favoriteGames"
        />

        <profile-inventory />

        <profile-history-of-games-list :history-of-games="historyOfGames" v-if="historyOfGames.length" />
    </div>
</template>

<script>
import {mapState} from 'vuex';
import profileApi from '../../api/profile.api';
import ProfileUserCard from './components/ProfileUserCard.vue';
import ProfileFavoriteGames from './components/ProfileFavoriteGames.vue';
import ProfileRewards from './components/ProfileRewards.vue';
import ProfileInventory from './components/ProfileInventory.vue';
import ProfileHistoryOfGamesList from './components/history-of-games/ProfileHistoryOfGamesList.vue';

export default {
    name: 'ProfilePage',
    components: {
        ProfileUserCard,
        ProfileFavoriteGames,
        ProfileRewards,
        ProfileInventory,
        ProfileHistoryOfGamesList,
    },
    data() {
        return {
            favoriteGames: [],
            historyOfGames: [],
            rewards: [],

            loadingFavoriteGames: false,
            loadingRewards: false,
        }
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),
    },

    methods: {
        async fetchUserFavoriteGames(userId) {
            try {
                this.loadingFavoriteGames = true;
                const response = await profileApi.fetchFavoriteGames(userId);
                this.favoriteGames = response.data;
            } catch (e) {
                console.log(e)
            } finally {
                this.loadingFavoriteGames = false;
            }
        },

        async fetchUserRewards(userId) {
            try {
                this.loadingRewards = true;
                const response = await profileApi.fetchRewards(userId);
                this.rewards = response.data;
            } catch (e) {
                console.log(e)
            } finally {
                this.loadingRewards = false;
            }
        },

        async fetchHistoryOfGames(userId) {
            try {
                const response = await profileApi.fetchHistoryOfGames(userId);
                this.historyOfGames = response.data;
            } catch (e) {
                console.log(e)
            }
        }
    },

    created() {
        this.fetchUserFavoriteGames(this.me.id);
        this.fetchUserRewards(this.me.id);
        this.fetchHistoryOfGames(this.me.id);
    }
};
</script>
<style src="./css/profile.css"></style>
<style src="./css/more.css"></style>