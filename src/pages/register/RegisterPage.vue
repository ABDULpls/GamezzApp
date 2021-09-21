<template>
    <div>
        <register-form />
        <span class="line-heading">Уже зарегистрированы?</span>
        <button class="btn signup__btn" @click="toLoginPage">Войти</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import RegisterForm from './components/RegisterForm.vue';

export default defineComponent({
    name: 'RegisterPage',
    inject: ['toLoginPage'],
    components: {
        RegisterForm,
    },
    data() {
        return {}
    },
    methods: {}
});
</script>

<style src="./css/register.css"></style>