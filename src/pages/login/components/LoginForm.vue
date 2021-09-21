<template>
    <form class="form" @submit="login" @click="readonly = false">
        <label class="input__label input-nickname">
            <input type="text" class="input" placeholder="Никнейм" v-model="form.username" :readonly="readonly">
        </label>
        <label class="input__label input-password">
            <input type="password" class="input" placeholder="Пароль" v-model="form.password" :readonly="readonly">
        </label>
        <input type="checkbox" class="checkbox__input" id="remember" v-model="form.remember">
        <label for="remember" class="enter__savepassword">Запомнить меня</label>
        <span class="enter__savepassword" @click="toForgotPasswordPage">Забыл пароль</span>
        <button type="submit" class="btn btn-orange">Войти</button>
        <span class="enter__rules">Пожалуйста прочитайте&nbsp;<a href="#" class="enter__rules-white">Правила нашего
          сервиса</a></span>
    </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface LoginData {
    username: string,
    password: string,
    remember: boolean,
}

export default defineComponent({
    name: 'LoginForm',
    emits: {
        'forgot-password': null,
    },
    data() {
        return {
            readonly: true,

            form: {
                username: '',
                password: '',
                remember: true,
            } as LoginData,
        }
    },
    computed: {
        formIsValid(): boolean {
            let valid = true;

            for(const field of Object.values(this.form)) {
                if (!field) {
                    valid = false;
                }
            }

            return valid;
        }
    },
    methods: {
        login() {
            if (!this.formIsValid) {
                return;
            }

            console.log('login');
        },

        toForgotPasswordPage() {
            this.$router.push({name: 'ForgotPasswordPage'});
        }
    },
});
</script>