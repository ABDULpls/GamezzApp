<template>
    <div>
        <div class="topbar topbar-dark">
          <button class="btn btn-back topbar__left" @click="toLoginPage"></button>
            <span class="topbar__title topbar__left">Сброс пароля</span>
        </div>
        <forgot-password-form />
    </div>
</template>

<script>
import ForgotPasswordForm from './components/ForgotPasswordForm.vue';

export default {
    name: 'ForgotPasswordPage',
    inject: ['toLoginPage'],
    components: {
        ForgotPasswordForm,
    },
    data() {
        return {}
    },
};
</script>
<style src="./css/forgot-password.css"></style>