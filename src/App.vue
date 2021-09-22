<template>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import {DEFAULT_TRANSITION} from './config/config';

export default defineComponent({
    name: 'App',
    provide() {
        return {
            transitionName: computed(() => this.transitionName),
        }
    },
    data() {
        return {}
    },
    computed: {
        transitionName() {
            return this.$route.meta.transition || DEFAULT_TRANSITION;
        },
    },
    mounted() {
        //this.$toastify.warning('Warning message');
        //localStorage.setItem('user', JSON.stringify({id: 1, name: 'po5epT', email: 'megastorm87@mail.ru'}));
    },

});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
