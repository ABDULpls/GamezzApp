<template>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <div :key="route.path">
                <component :is="Component" />
                <page-footer />
            </div>
        </transition>
    </router-view>
</template>

<script>
import {defineComponent} from 'vue';
import PageFooter from '../components/PageFooter.vue';
export default {
    name: 'MainLayout',
    components: {
        PageFooter,
    },
    inject: ['transitionName'],
};
</script>

<style></style>