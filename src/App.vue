<template>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<script>
import {computed} from 'vue';
import {DEFAULT_TRANSITION} from './config/config';
export default {
    name: 'App',
    provide() {
        return {
            transitionName: computed(() => this.transitionName),
            toPage: this.toPage,
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
    methods: {
        toPage(name) {
            this.$router.push({name: name});
        },
    },
    mounted() {
        //this.$toastify.warning('Warning message');
    },

};
</script>
