<template>
    <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    data() {
        return {}
    },
    computed: {},
    mounted() {
        //this.$toastify.warning('Warning message');
    }
});
</script>
<style></style>
