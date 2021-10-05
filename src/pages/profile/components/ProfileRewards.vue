<template>
    <div>
        <span class="profile__heading">Награды ({{ rewards.length }})</span>
        <div class="profile__prize">
            <div class="profile__prize-item" v-for="reward in rewards" :key="reward.id">
                <img :src="reward.iconUrl" width="56" height="56" alt="prize">
                <span class="profile__repeat" v-if="reward.count > 1">x{{ reward.count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileRewards',
    props: {
        rewards: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        }
    }
};
</script>