<template>
    <img class="logo" alt="logo" src="https://cdn.gamezz.io/images/header/logo.png" width="110" />
    <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'AuthLayout',
});
</script>

<style src="../pages/login/css/auth.css"></style>