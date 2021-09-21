<template>
    <div class="enter">
        <button class="btn border-gradient">Играть как гость</button>
        <span class="line-heading">Войти через соцсети</span>
        <div class="society">
            <div class="society__item vk"></div>
            <div class="society__item fb"></div>
            <div class="society__item gl"></div>
        </div>
        <span class="line-heading">Войти через Gamezz id</span>

        <login-form @forgot-password="initForgotPassword" />

        <span class="line-heading">Еще нет аккаунта?</span>
        <button class="btn enter__btn" @click="toRegisterPage">Зарегистрироваться</button>
    </div>

    <screen-slider v-model:is-open="forgotPasswordScreen">
        <template #title>Сброс пароля</template>
        <template #default>
            <forgot-password-form />
        </template>
    </screen-slider>

</template>

<script>
import {defineComponent} from 'vue';
import LoginForm from './components/LoginForm.vue';
import ForgotPasswordForm from './components/ForgotPasswordForm.vue';
import ScreenSlider from '../../components/ScreenSlider.vue';

export default defineComponent({
    name: 'LoginPage',
    components: {
        LoginForm,
        ForgotPasswordForm,
        ScreenSlider,
    },
    data() {
        return {
            forgotPasswordScreen: false,
        }
    },
    methods: {
        toRegisterPage() {
            this.$router.push({name: 'RegisterPage'});
        },

        initForgotPassword() {
            this.forgotPasswordScreen = true;
        }
    },
});
</script>
<style src="./css/login.css"></style>