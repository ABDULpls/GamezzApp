<template>
    <div class="checkmail">
        <div class="checkmail__icon"></div>
        <h3 class="checkmail__heading">Проверьте почту</h3>
        <p class="checkmail__text">На адрес user@gmail.com отправлена ссылка для обновления пароля</p>
        <p class="text-gradient" @click="$router.go(-1)">Письмо не пришло?</p>
        <button class="checkmail__btn btn btn-border" @click="toLoginPage">Войти</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'CheckEmailPage',
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
<style src="./css/checkmail.css"></style>