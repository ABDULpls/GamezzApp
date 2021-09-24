<template>
    <div class="gamelist">
        <game-list-item
            v-for="game in games"
            :game="game"
            :key="game.id"
        />
    </div>
</template>

<script>

import GameListItem from './GameListItem.vue';
export default {
    name: 'GameList',
    components: {
        GameListItem,
    },
    props: {
        games: {
            type: Array,
            default: () => [],
        }
    }
};
</script>