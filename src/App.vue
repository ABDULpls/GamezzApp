<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    data() {
        return {

        }
    },

    computed: {
        layout() {
            return this.$route.meta.layout || 'main-layout';
        }
    },

    mounted() {
        this.$toastify.warning('Warning message');
    }
});
</script>

<style>
</style>
