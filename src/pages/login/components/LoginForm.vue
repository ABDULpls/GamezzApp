<template>
    <form class="form" @submit.prevent="login" @click="readonly = false">
        <label class="input__label input-nickname">
            <input type="text" class="input" placeholder="Никнейм" v-model="form.username" :readonly="readonly">
        </label>
        <label class="input__label input-password">
            <input type="password" class="input" placeholder="Пароль" v-model="form.password" :readonly="readonly">
        </label>
        <div class="form__row">
          <input type="checkbox" class="checkbox__input" id="remember" v-model="form.remember">
          <label for="remember" class="enter__savepassword">Запомнить меня</label>
          <span class="enter__savepassword" @click="toForgotPasswordPage">Забыл пароль</span>
        </div>
        <button type="submit" class="btn btn-orange">Войти</button>
        <span class="enter__rules">Пожалуйста прочитайте&nbsp;<a href="#" class="enter__rules-white">Правила нашего
          сервиса</a></span>
    </form>
</template>

<script>

export default {
    name: 'LoginForm',
    emits: {
        'submit:login': null,
    },
    inject: ['toForgotPasswordPage'],
    data() {
        return {
            readonly: true,

            form: {
                username: '',
                password: '',
                remember: true,
            },
        };
    },
    computed: {
        formIsValid() {
            let valid = true;

            for (const field of Object.values(this.form)) {
                if (!field) {
                    valid = false;
                }
            }

            return valid;
        },
    },
    methods: {
        login() {
            /*if (!this.formIsValid) {
                return;
            }*/

            this.$emit('submit:login', this.form);
        },
    },
};
</script>