<template>
    <router-view v-slot="{Component, route}">
        <transition :name="transitionName" mode="out-in">
            <div :key="route.path">
                <img
                    v-if="showLogo"
                    class="logo"
                    alt="logo"
                    src="https://cdn.gamezz.io/images/header/logo.png"
                    width="110"
                />
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>

<script>

export default {
    name: 'AuthLayout',
    inject: ['transitionName', 'toPage'],
    provide() {
        return {
            toLoginPage: this.toLoginPage,
            toRegisterPage: this.toRegisterPage,
            toCheckEmailPage: this.toCheckEmailPage,
            toForgotPasswordPage: this.toForgotPasswordPage,
        }
    },
    data() {
        return {}
    },
    computed: {
        showLogo() {
            return this.$route.name === 'LoginPage' || this.$route.name === 'RegisterPage';
        }
    },
    methods: {
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
};
</script>

<style src="../pages/login/css/auth.css"></style>