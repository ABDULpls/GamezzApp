<template>
    <div class="checkmail">
        <div class="checkmail__icon"></div>
        <h3 class="checkmail__heading">Проверьте почту</h3>
        <p class="checkmail__text">На адрес user@gmail.com отправлена ссылка для обновления пароля</p>
        <p class="text-gradient checkmail__nomail" @click="toForgotPasswordPage">Письмо не пришло?</p>
        <button class="checkmail__btn btn-border" @click="toLoginPage">Войти</button>
    </div>
</template>

<script>

export default {
    name: 'CheckEmailPage',
    inject: ['toLoginPage', 'toForgotPasswordPage'],
    data() {
        return {}
    },
    methods: {}
};
</script>
<style src="./css/checkmail.css"></style>