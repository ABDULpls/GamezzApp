<template>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <div :key="route.path">
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'MainLayout',
    inject: ['transitionName'],
});
</script>

<style></style>