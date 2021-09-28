<template>
    <div>
        <modal-dialog v-model:is-open="modal" v-if="modal">
            <template #body>
                <modal-rate />
            </template>
        </modal-dialog>

        <button class="btn border-gradient">Играть как гость</button>
        <span class="line-heading">Войти через соцсети</span>
        <div class="society">
            <div class="society__item vk"></div>
            <div class="society__item fb"></div>
            <div class="society__item gl"></div>
        </div>
        <span class="line-heading">Войти через Gamezz id</span>

        <login-form @submit:login="onSubmitLoginForm" />

        <span class="line-heading" @click="modal = true">Еще нет аккаунта?</span>
        <button class="btn btn-string enter__btn" @click="toRegisterPage">
            Зарегистрироваться
        </button>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';

import LoginForm from './components/LoginForm.vue';
import ModalRate from '../../components/ModalRate.vue';

export default {
    name: 'LoginPage',
    inject: ['toRegisterPage'],
    components: {
        LoginForm,
        ModalRate,
        ModalDialog: defineAsyncComponent(() =>
            import('../../components/modal-dialog/ModalDialog.vue')
        ),
    },
    data() {
        return {
            modal: false,
        };
    },
    methods: {
        async onSubmitLoginForm() {
            const response = await this.$store.dispatch('login');

            if (response) {
                window.location.reload();
            }
        }
    }
};
</script>
<style src="./css/login.css"></style>