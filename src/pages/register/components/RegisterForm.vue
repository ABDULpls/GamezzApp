<template>
    <form
        class="form signup"
        @submit.prevent="register"
        @click="readonly = false"
    >
        <label class="input__label input-nickname">
            <input
                type="text"
                class="input"
                placeholder="Никнейм"
                v-model="form.username"
                :readonly="readonly"
            >
        </label>
        <label class="input__label input-email">
            <input
                type="email"
                class="input"
                placeholder="E-mail"
                v-model="form.email"
                :readonly="readonly"
            >
        </label>
        <label class="input__label input-password">
            <input
                type="password"
                class="input"
                placeholder="Пароль"
                v-model="form.password"
                :readonly="readonly"
            >
        </label>
        <label class="input__label input-password">
            <input
                type="password"
                class="input"
                placeholder="Повторите пароль"
                v-model="form.confirmPassword"
                :readonly="readonly"
            >
        </label>
        <button type="submit" class="btn btn-orange">Зарегистрироваться</button>
        <input
            type="checkbox"
            class="checkbox__input"
            id="terms"
            v-model="form.policy"
        >
        <label for="terms" class="checkbox__label">
            <span>Я принимаю <a href="#">Пользовательское соглашение</a> и согласен на обработку персональных данных</span>
        </label>
    </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface RegisterData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    policy: boolean,
}

export default defineComponent({
    name: 'RegisterForm',
    data() {
        return {
            readonly: true,

            form: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                policy: true,
            } as RegisterData,
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
        register() {
            if (!this.formIsValid) {
                return;
            }

            console.log('register');
        }
    },
});
</script>