<template>
    <h1>{{ hello }}</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    data() {
        return {
            hello: 'Hello world',
        }
    }
});
</script>

<style>
</style>
