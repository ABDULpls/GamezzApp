<template>
    <div>
        <span class="profile__heading">Последние игры</span>
        <div class="last-games">
            <div class="last-games__list">
                <span class="last-games__list-active">Все</span>
                <span class="last-games__list-item">Дурак простой</span>
                <span class="last-games__list-item">Шахматы</span>
                <span class="last-games__list-item">Пасьянс Паук</span>
            </div>

            <profile-history-of-games-item
                v-for="historyItem in historyOfGames"
                :history-of-games-item="historyItem"
                :key="historyItem.id"
            />
        </div>
    </div>
</template>

<script>
import ProfileHistoryOfGamesItem from './ProfileHistoryOfGamesItem.vue';
export default {
    name: 'ProfileHistoryOfGamesList',
    components: {
        ProfileHistoryOfGamesItem
    },
    props: {
        historyOfGames: {
            type: Array,
            default: () => [],
        }
    },
};
</script>
