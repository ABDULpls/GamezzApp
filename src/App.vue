<template>
    <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    data() {
        return {
        }
    },
    computed: {},
    mounted() {
        //this.$toastify.warning('Warning message');
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
