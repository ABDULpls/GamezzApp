<template>
    <div class="topbar">
        <span class="topbar__title topbar__left">Мой профиль</span>
        <img @click="openProfileEdit" src="../../assets/images/sprite.svg#profile-edit" alt="edit" width="21" height="21">
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

		<profile-edit-screen-slider
		v-model:is-open="profileEditScreen"
		/>

        <profile-rewards
            :rewards="rewards"
            :loading="loadingRewards"
        />

        <profile-favorite-games
            :games="favoriteGames"
        />

        <span class="profile__heading">Инвентарь</span>
        <div class="profile__tools">
            <img class="profile__tools-img" src="https://gamezz.com/images/img14.png" alt="player">
            <div class="profile__tools-item">
                <div class="profile__tool">
                    <img src="../../assets/images/sprite.svg#change" width="16" height="20" alt="refresh">
                </div>
                <span>Голова</span>
            </div>
            <div class="profile__tools-item">
                <div class="profile__tool">
                </div>
                <span>Шея</span>
            </div>
            <div class="profile__tools-item">
                <div class="profile__tool">
                    <img src="https://gamezz.com/images/img15.png" width="30" alt="refresh">
                </div>
                <span>Тело</span>
            </div>
            <div class="profile__tools-item">
                <div class="profile__tool">
                </div>
                <span>Пояс</span>
            </div>
            <div class="profile__tools-item">
                <div class="profile__tool">
                </div>
                <span>Ноги</span>
            </div>
            <div class="profile__tools-item">
                <div class="profile__tool">
                </div>
                <span>Ступни</span>
            </div>
        </div>

        <span class="profile__heading">Последние игры</span>
        <div class="last-games">
            <div class="last-games__list">
                <span class="last-games__list-active">Все</span>
                <span class="last-games__list-item">Дурак простой</span>
                <span class="last-games__list-item">Шахматы</span>
                <span class="last-games__list-item">Пасьянс Паук</span>
            </div>
            <div class="last-games__item">
                <picture class="last-game">
                    <source srcset="https://cdn.gamezz.io/games/9_optimize.webp" type="image/webp">
                    <img class="last-game__img" height="55" src="https://cdn.gamezz.io/games/9_optimize.jpg" alt="Дурак Простой"
                         loading="lazy">
                </picture>
                <span class="last-games__title">Дурак простой</span>
                <img src="../../assets/images/sprite.svg#profile-name-icon" alt="last-game" class="last-games__icon" width="8"
                     height="14">
                <span class="last-games__crystals">+200</span>
                <span class="last-games__date">28.12.20</span>
                <div class="last-games__gamers">
                    <div class="last-games__winner">
                        <img class="last-games__gamer" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" width="38" height="38"
                             alt="player">
                    </div>
                    <img class="last-games__gamer" width="38" height="38" src="https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg"
                         alt="player">
                    <img class="last-games__gamer" width="38" height="38" src="https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg"
                         alt="player">
                    <img class="last-games__gamer" width="38" height="38" src="https://cdn.gamezz.io/avatars/z/o/1623_64x64.jpg"
                         alt="player">
                </div>
            </div>
            <div class="last-games__item">
                <picture class="last-game">
                    <source srcset="https://cdn.gamezz.io/games/12_optimize.webp" type="image/webp">
                    <img class="last-game__img" height="55" src="https://cdn.gamezz.io/games/12_optimize.jpg" alt="Шахматы"
                         loading="lazy">
                </picture>
                <span class="last-games__title">Шахматы</span>
                <img src="../../assets/images/sprite.svg#profile-name-icon" alt="last-game" class="last-games__icon" width="8"
                     height="14">
                <span class="last-games__crystals">+250</span>
                <span class="last-games__date">28.12.20</span>
                <div class="last-games__gamers">
                    <div class="last-games__winner">
                        <img class="last-games__gamer" src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg" width="38" height="38"
                             alt="player">
                    </div>
                    <img class="last-games__gamer" width="38" height="38" src="https://cdn.gamezz.io/avatars/z/o/1623_64x64.jpg"
                         alt="player">
                </div>
            </div>
            <div class="last-games__item">
                <picture class="last-game">
                    <source srcset="https://cdn.gamezz.io/games/5_optimize.webp" type="image/webp">
                    <img class="last-game__img" height="55" src="https://cdn.gamezz.io/games/5_optimize.jpg" alt="Пасьянс паук"
                         loading="lazy">
                </picture>
                <span class="last-games__title">Пасьянс паук</span>
                <img src="../../assets/images/sprite.svg#profile-name-icon" alt="last-game" class="last-games__icon" width="8"
                     height="14">
                <span class="last-games__score text-gradient">15 очков</span>
                <span class="last-games__date">28.12.20</span>
                <span class="last-games__gamers">Одиночная игра</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import profileApi from '../../api/profile.api';
import ProfileUserCard from './components/ProfileUserCard.vue';
import ProfileFavoriteGames from './components/ProfileFavoriteGames.vue';
import ProfileRewards from './components/ProfileRewards.vue';
import ProfileEditScreenSlider from "./components/ProfileEditScreenSlider.vue";
export default {
    name: 'ProfilePage',
    components: {
        ProfileUserCard,
        ProfileFavoriteGames,
        ProfileRewards,
		ProfileEditScreenSlider,
    },
    data() {
        return {
            favoriteGames: [],
            rewards: [],
			profileEditScreen: false,
            loadingFavoriteGames: false,
            loadingRewards: false,
        }
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
			modalIsOpen: state => state.modalIsOpen
        }),
    },
	watch: {
		modalIsOpen(state, prevState){
			if (state === false && prevState === true)
				this.profileEditScreen = false
		},
		profileEditScreen() {
			this.$store.dispatch('setModal', this.profileEditScreen)
			if (this.profileEditScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		}
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
		openProfileEdit() {
        	this.profileEditScreen = true;
		}
    },

    created() {
        this.fetchUserFavoriteGames(this.me.id);
        this.fetchUserRewards(this.me.id);
    }
};
</script>
<style src="./css/profile.css"></style>
<style src="./css/more.css"></style>
