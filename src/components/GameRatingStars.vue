<template>
    <div class="rating">
        <div
            v-for="star in stars"
            class="rating__star"
            :class="classes(star)"
            @click="clickOnStar(star)"
        ></div>
    </div>
</template>

<script>

export default {
    name: 'GameRatingStars',
    emits: {
        'userRate': null,
    },

    data() {
        return {
            stars: [
                {id: 1, active: false},
                {id: 2, active: false},
                {id: 3, active: false},
                {id: 4, active: false},
                {id: 5, active: false},
            ],
        };
    },

    methods: {
        classes(star) {
            return {
                'rating__star-choose': star.active,
            };
        },

        clickOnStar(star) {
            this.stars.forEach(el => el.id > star.id ? el.active = false : el.active = true);
            this.$emit('userRate', star.id);
        },
    },
};
</script>
