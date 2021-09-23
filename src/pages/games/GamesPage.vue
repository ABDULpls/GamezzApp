<template>
    <div>
        <h1 class="page-title">Игры</h1>
        <div class="miniprofile miniprofile-fix">
            <span class="miniprofile__level">{{ me.level }}</span>
            <img class="miniprofile__icon" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="pic" width="35"
                 height="35">
            <span class="miniprofile__results stars">{{ normalizeNumber(me.rating) }}</span>
            <span class="miniprofile__results crystals">{{ normalizeNumber(me.crystals) }}</span>
        </div>

        <scroll-menu
            :items="gameCategories"
            @select-item="filterGames"
        />
        <game-list :games="filteredGames" />


    </div>
</template>

<script>
import {defineComponent} from 'vue';
import {mapState} from 'vuex';

import GameList from './components/GameList.vue';
import ScrollMenu from './components/ScrollMenu.vue';
import normalizeNumber from '../../utils/normalize-number';

export default defineComponent({
    name: 'GamesPage',
    components: {
        GameList,
        ScrollMenu,
    },
    data() {
        return {
            gameCategories: [
                {
                    slug: '',
                    label: 'Все',
                },
                {
                    slug: 'cards',
                    label: 'Карточные',
                },
                {
                    slug: 'logic',
                    label: 'Логические',
                },
                {
                    slug: 'solitaire',
                    label: 'Пасьянсы',
                },
                {
                    slug: 'cells',
                    label: 'Клеточные',
                },
                {
                    slug: '2players',
                    label: 'На 2 игрока',
                },
                {
                    slug: '34players',
                    label: 'На 3-4 игрока',
                },
            ],

            games: [
                {
                    id: 1,
                    slug: 'minesweeper',
                    title: 'Сапер',
                    categorySlugs: ['cells', 'logic', '2players', '34players'],
                    playersCount: 86,
                },
                {
                    id: 3,
                    slug: 'solitaire-klondike',
                    title: 'Пасьянс косынка',
                    categorySlugs: ['cards', 'solitaire', '2players', '34players'],
                    playersCount: 56,
                },
                {
                    id: 4,
                    slug: 'tetris',
                    title: 'Тетрис',
                    categorySlugs: ['logic', '2players'],
                    playersCount: 48,
                },
                {
                    id: 5,
                    slug: 'solitaire-spider',
                    title: 'Паук 1 масть',
                    categorySlugs: ['cards', 'solitaire', '2players', '34players'],
                    playersCount: 17,
                },
                {
                    id: 6,
                    slug: 'wordsfind',
                    title: 'Найди слова',
                    categorySlugs: ['cells', 'logic', '2players', '34players'],
                    playersCount: 21,
                },
                {
                    id: 7,
                    slug: 'solitaire-normal',
                    title: 'Паук 4 масти',
                    categorySlugs: ['cards', 'solitaire', '2players', '34players'],
                    playersCount: 77,
                },
                {
                    id: 9,
                    slug: 'fool-classic',
                    title: 'Дурак простой',
                    categorySlugs: ['cards', '2players', '34players'],
                    playersCount: 56,
                },
                {
                    id: 10,
                    slug: 'checkers',
                    title: 'Шашки русские',
                    categorySlugs: ['cells', '2players'],
                    playersCount: 33,
                },
            ],
            filteredGames: [],
            loadingGames: false,
        }
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),
    },
    methods: {
        filterGames(index) {
            if (index === 0) {
                this.filteredGames = [...this.games];
            } else {
                this.filteredGames = this.games.filter(game => game.categorySlugs.includes(this.gameCategories[index].slug));
            }
        },

        normalizeNumber,
    },
    created() {
        this.filteredGames = [...this.games];
    }
});
</script>

<style src="./css/games-list.css"></style>
