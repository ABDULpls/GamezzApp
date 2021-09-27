<template>
    <div>
        <register-form />
        <span class="line-heading">Уже зарегистрированы?</span>
        <button class="btn-string signup__btn" @click="toLoginPage">Войти</button>
    </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';

export default {
    name: 'RegisterPage',
    inject: ['toLoginPage'],
    components: {
        RegisterForm,
    },
    data() {
        return {}
    },
    methods: {}
};
</script>

<style src="./css/register.css"></style>