<template>
    <div class="miniprofile miniprofile-fix">
        <span class="miniprofile__level">{{ user.level }}</span>
        <img class="miniprofile__icon"
             :src="user.avatar"
             alt="pic"
             width="35"
             height="35">
        <span class="miniprofile__results stars">{{ normalizeNumber(user.rating) }}</span>
        <span class="miniprofile__results crystals">{{ normalizeNumber(user.crystals) }}</span>
    </div>
</template>

<script>
import {normalizeNumber} from '../../utils/utils';
export default {
    name: 'UserWidget',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    methods: {
        normalizeNumber,
    }
};
</script>