<template>
    <div class="form password">
        <p class="password__text">
            Введите e-mail на который вы регистрировались
        </p>
        <label class="input__label input-email">
            <input type="email" class="input" placeholder="Введите e-mail">
        </label>
        <button type="submit" class="btn btn-orange password__btn" @click="toCheckEmailPage">Получить ссылку для восстановления</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ForgotPasswordForm',
    inject: ['toCheckEmailPage'],
    data() {
        return {}
    },
    methods: {}
});
</script>

<style src="../css/forgot-password.css"></style>