<template>
    <div class="fame__item">
        <img
            class="fame__img"
            :src="player.avatar"
            width="40"
            height="40"
            alt="user"
        >
        <span class="name fame__name">{{ player.name }}</span>
        <span class="fame__top fame-grey" :class="placeClasses">#{{ index ? (index + 1) : player.place }}</span>
        <span class="fame__score text-gradient">{{ player.rating }} баллов</span>
        <span class="fame__move" :class="progressClasses">{{ absProgress }}</span>
        <span class="fame__games">{{ player.games }}</span>
        <span class="fame__wins">{{ player.wins }}</span>
        <span class="fame__winrate">{{ player.winRate }}</span>
        <span class="fame__games fame-grey">Игр</span>
        <span class="fame__wins fame-grey">Побед</span>
        <span class="fame__winrate fame-grey">Winrate</span>
    </div>
</template>

<script>
export default {
    name: 'FamePlayersItem',
    props: {
        player: {
            type: Object,
            required: true,
        },

        index: Number,
        default: null,
    },

    computed: {
        absProgress() {
            return Math.abs(this.player.progress) || 0;
        },

        progressClasses() {
            return {
                'fame__move-up': this.player.progress > 0,
                'fame__move-down': this.player.progress < 0,
            }
        },

        placeClasses() {
            return {
                'fame__top-gold': this.player.place === 1,
                'fame__top-silver': this.player.place === 2,
                'fame__top-bronze': this.player.place === 3,
            }
        }
    }
};
</script>