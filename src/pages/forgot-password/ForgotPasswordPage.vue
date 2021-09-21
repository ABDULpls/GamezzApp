<template>
    <div>
        <div class="topbar topbar-dark">
            <img
                src="../../assets/images/sprite.svg#arrow-left"
                class="topbar__left"
                alt="back"
                width="10"
                height="17"
                @click="toLoginPage"
            >
            <span class="topbar__title topbar__left">Сброс пароля</span>
        </div>
        <forgot-password-form />
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import ForgotPasswordForm from './components/ForgotPasswordForm.vue';

export default defineComponent({
    name: 'ForgotPasswordPage',
    inject: ['toLoginPage'],
    components: {
        ForgotPasswordForm,
    },
    data() {
        return {}
    },
});
</script>
<style src="./css/forgot-password.css"></style>