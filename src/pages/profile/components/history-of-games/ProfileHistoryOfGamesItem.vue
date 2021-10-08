<template>
    <div class="last-games__item">
        <picture class="last-game">
            <source :srcset="historyOfGamesItem.game.image.webp" type="image/webp">
            <img class="last-game__img" height="55" :src="historyOfGamesItem.game.image.jpg" :alt="historyOfGamesItem.game.name">
        </picture>
        <span class="last-games__title">{{ historyOfGamesItem.game.name }}</span>
        <img src="../../../../assets/images/sprite.svg#profile-name-icon" alt="last-game" class="last-games__icon" width="8" height="14">
        <span class="last-games__crystals" v-if="historyOfGamesItem.crystals">{{ historyOfGamesItem.crystals }}</span>
        <span class="last-games__score text-gradient" v-if="historyOfGamesItem.points">{{ historyOfGamesItem.points }} очков</span>
        <span class="last-games__date">{{ historyOfGamesItem.gameDate }}</span>
        <div class="last-games__gamers">
            <template v-if="historyOfGamesItem.gameType === 'single'">
                Одиночная игра
            </template>
            <template v-else>
                <div class="last-games__winner">
                    <img
                        class="last-games__gamer"
                        :src="historyOfGamesItem.players[0].avatar"
                        width="38"
                        height="38"
                        alt="player"
                    >
                </div>
                <img
                    v-for="opponent in opponents"
                    :key="opponent.id"
                    class="last-games__gamer"
                    width="38"
                    height="38"
                    :src="opponent.avatar"
                    alt="player"
                >
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileHistoryOfGamesItem',
    props: {
        historyOfGamesItem: {
            type: Object,
            default: () => ({}),
        }
    },
    computed: {
        opponents() {
            return this.historyOfGamesItem.players.slice(1);
        }
    }
};
</script>