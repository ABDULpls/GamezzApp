<template>
    <div class="more">
        <div class="profile-card">
            <img
                class="profile-card__icon"
                :src="me.avatar"
                alt="pic"
                width="71"
                height="71"
            >
            <span class="profile-card__level">{{ me.level }}</span>
            <div class="profile-card__name">
                <span>{{ me.name }}</span>
                <img
                    src="../../../assets/images/sprite.svg#profile-name-icon"
                    alt="profile"
                    class="more__name-icon"
                    width="8"
                    height="14"
                >
            </div>
            <span class="profile-card__crystals">{{ normalizeNumber(me.crystals) }}</span>
            <span class="profile-card__gamezz">{{ normalizeNumber(me.golds || 90) }}</span>
            <span class="profile-card__stars">{{ normalizeNumber(me.rating) }}</span>
        </div>
        <div class="more__items">
            <div class="more__item">
                <img src="../../../assets/images/sprite.svg#more-dialogs" width="33" height="45" alt="pic">
                <span>Диалоги
                    <span class="more__item-active">2</span>
                </span>
            </div>
            <div class="more__item">
                <img src="../../../assets/images/sprite.svg#more-friends" width="36" height="45" alt="pic">
                <span>Друзья</span>
            </div>
            <div class="more__item">
                <img src="../../../assets/images/sprite.svg#more-wallet" width="33" height="45" alt="pic">
                <span>Кошелек</span>
            </div>
            <div class="more__item">
                <img src="../../../assets/images/sprite.svg#more-blacklist" width="35" height="45" alt="pic">
                <span>Черный список</span>
            </div>
        </div>
        <span class="more__exit" @click="logout">Выйти</span>
        <div class="more__lang" @click="languagesScreen = true">
            <img src="../../../assets/images/lang.svg#ru" alt="flag" class="more__flag" width="18" height="18">
            <span>Русский</span>
        </div>

        <languages-screen-slider
            v-model:is-open="languagesScreen"
            :languages-list="languages"
            @update:language="onUpdateLanguage"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {normalizeNumber} from '../../../utils/utils';

import LanguagesScreenSlider from './componets/LanguagesScreenSlider.vue';

export default {
    name: 'ProfilePreviewPage',
    components: {
        LanguagesScreenSlider,
    },
    data() {
        return {
            languagesScreen: false,
            languages: [
                {
                    code: 'ru',
                    label: 'Русский',
                },
                {
                    code: 'en',
                    label: 'Английский',
                },
                {
                    code: 'es',
                    label: 'Испанский',
                },
            ],
        };
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),
    },
    methods: {
        async logout() {
            const response = await this.$store.dispatch('logout');

            if (response) {
                window.location.reload();
            }
        },
        onUpdateLanguage(v) {
            console.log(v)
        },
        normalizeNumber,
    },
};
</script>
<style src="./css/more.css"></style>