<template>
    <div class="profile-card">
        <img
            class="profile-card__icon"
            :src="user.avatar"
            alt="pic"
            width="71"
            height="71"
        >
        <span class="profile-card__level">{{ user.level }}</span>
        <div class="profile-card__name">
            <span class="name more__name">{{ user.name }}</span>
            <slot name="link"></slot>
        </div>
        <span class="profile-card__crystals">{{ normalizeNumber(user.crystals) }}</span>
        <span class="profile-card__gamezz">{{ normalizeNumber(user.golds || 90) }}</span>
        <span class="profile-card__stars">{{ normalizeNumber(user.rating) }}</span>
    </div>
</template>

<script>
import {normalizeNumber} from '../../../utils/utils';
import BaseButton from '../../../components/ui/button/BaseButton.vue';

export default {
    name: 'ProfileUserCard',
    components: {
        BaseButton,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    computed: {

    },
    methods: {
        normalizeNumber,
    }
};
</script>