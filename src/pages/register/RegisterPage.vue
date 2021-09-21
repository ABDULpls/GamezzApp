<template>
    <register-form />
    <span class="line-heading">Уже зарегистрированы?</span>
    <button class="btn signup__btn" @click="toLoginPage">Войти</button>
</template>

<script>
import {defineComponent} from 'vue';
import RegisterForm from './components/RegisterForm.vue';

export default defineComponent({
    name: 'RegisterPage',
    components: {
        RegisterForm,
    },
    data() {
        return {}
    },
    methods: {
        toLoginPage() {
            this.$router.push({name: 'LoginPage'});
        }
    }
});
</script>

<style src="./css/register.css"></style>