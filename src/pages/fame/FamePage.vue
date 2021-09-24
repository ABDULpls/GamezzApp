<template>
    <div>
        <h1 class="page-title">Зал Славы</h1>

        <user-widget :user="me" />

        <span class="fame-mode" @click="filtersScreen = true">Общий рейтинг</span>

        <div class="fame">
            <players-list-item
                class="border-gradient"
                :player="me"
            />

            <players-list-item
                v-for="(player, idx) in players"
                :key="player.id"
                :player="player"
                :index="idx"
            />

            <div class="fame__btns">
                <span class="fame__btn">1-50</span>
                <span class="fame__btn fame__btn-active">51-100</span>
                <span class="fame__btn">101-150</span>
                <span class="fame__bts">...</span>
                <span class="fame__btn">501-550</span>
            </div>
            <span class="fame__nav fame__back">Назад</span>
            <span class="fame__nav fame__fwd">Вперед</span>
        </div>

        <screen-slider v-model:is-open="filtersScreen">
            <template #title>Выбрать рейтинг</template>
            <template #default>
                <fame-filters @update:item="onChangeFilterItem" />
            </template>
        </screen-slider>
    </div>
</template>

<script>
import {mapState} from 'vuex';

import ScreenSlider from '../../components/screen-slider/ScreenSlider.vue';
import PlayersListItem from './components/FamePlayersItem.vue';
import FameFilters from './components/FameFilters.vue';
import UserWidget from '../../components/ui/UserWidget.vue';

export default {
    name: 'FamePage',
    components: {
        PlayersListItem,
        ScreenSlider,
        FameFilters,
        UserWidget,
    },
    data() {
        return {
            players: [],

            activeFiltersItemIndex: 0,
            filtersScreen: false,
        };
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),
    },
    methods: {
        onChangeFilterItem(item) {
            // request by item.slug
        },
    },

    created() {
        this.players = [
            {
                id: 22,
                name: 'Gamer',
                rating: '121,532',
                games: 818,
                wins: 738,
                winRate: '90.22%',
                avatar: 'https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg',
                place: 1,
                progress: 2,
            },
            {
                id: 2,
                name: 'Treena',
                rating: '121,532',
                games: 818,
                wins: 738,
                winRate: '90.22%',
                avatar: 'https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg',
                place: 2,
                progress: 7,
            },
            {
                id: 3,
                name: 'InKey',
                rating: '121,532',
                games: 818,
                wins: 738,
                winRate: '90.22%',
                avatar: 'https://cdn.gamezz.io/avatars/z/o/1623_64x64.jpg',
                place: 3,
                progress: 16,
            },
            {
                id: 4,
                name: 'BarSik',
                rating: '121,532',
                games: 818,
                wins: 738,
                winRate: '90.22%',
                avatar: 'https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg',
                place: 4,
                progress: -3,
            },
            {
                id: 5,
                name: 'Agent',
                rating: '121,532',
                games: 818,
                wins: 738,
                winRate: '90.22%',
                avatar: 'https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg',
                place: 5,
                progress: -10,
            },
        ];
    },
};
</script>

<style src="./css/fame.css"></style>
