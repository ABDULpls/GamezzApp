<template>
    <img class="logo" alt="logo" src="https://cdn.gamezz.io/images/header/logo.png" width="110"/>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <component :is="Component" :key="route.path"/>
        </transition>
    </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

const DEFAULT_TRANSITION = 'fade';

export default defineComponent({
    name: 'AuthLayout',
    provide() {
        return {
            toLoginPage: this.toLoginPage,
            toRegisterPage: this.toRegisterPage,
            toCheckEmailPage: this.toCheckEmailPage,
            toForgotPasswordPage: this.toForgotPasswordPage,
        }
    },
    data() {
        return {

        }
    },
    computed: {
        transitionName() {
            return this.$route.meta.transition || DEFAULT_TRANSITION;
        }
    },
    methods: {
        toPage(name: string) {
            this.$router.push({name: name});
        },
        toLoginPage() {
            this.toPage('LoginPage');
        },
        toRegisterPage() {
            this.toPage('RegisterPage');
        },
        toCheckEmailPage() {
            this.toPage('CheckEmailPage');
        },
        toForgotPasswordPage() {
            this.toPage('ForgotPasswordPage');
        }
    }
});
</script>

<style src="../pages/login/css/auth.css"></style>