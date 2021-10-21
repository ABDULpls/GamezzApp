<template>
    <div>
        <span class="profile__heading">Любимые игры</span>
        <div class="profile__games">
            <figure class="profile__game" v-for="game in games" :key="game.id">
                <picture class="profile__picture">
                    <source :srcset="game.image.webp" type="image/webp">
                    <img class="profile__img" :src="game.image.jpg" :alt="game.name">
                </picture>
<!--                <figcaption class="profile__figcaption">{{ game.name }}</figcaption>-->
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileFavoriteGames',
    props: {
        games: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
};
</script>