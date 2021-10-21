<template>
    <div>
        <h1 class="page-title">Зал Славы</h1>

        <user-widget :user="me" fixed />

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

            <fame-pagination @update:pagination="test" />
        </div>

        <fame-screen-slider
            v-model:is-open="filtersScreen"
            @update:filter="onChangeFilterItem"
        />

    </div>
</template>

<script>
import {mapState} from 'vuex';

import FameScreenSlider from './components/FameScreenSlider.vue';
import PlayersListItem from './components/FamePlayersItem.vue';
import UserWidget from '../../components/ui/UserWidget.vue';
import FamePagination from './components/FamePagination.vue';

export default {
    name: 'FamePage',
    components: {
        PlayersListItem,
        FameScreenSlider,
        FamePagination,
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
    	test(e) {
			console.log(e);
		},
        onChangeFilterItem(item) {
            // request by item.slug
            console.log(item);
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
