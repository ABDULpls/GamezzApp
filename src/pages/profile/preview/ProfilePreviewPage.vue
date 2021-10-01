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
                <span class="name more__name">{{ me.name }}</span>
                <base-button class="btn btn-right more__name-icon" />
            </div>
            <span class="profile-card__crystals">{{ normalizeNumber(me.crystals) }}</span>
            <span class="profile-card__gamezz">{{ normalizeNumber(me.golds || 90) }}</span>
            <span class="profile-card__stars">{{ normalizeNumber(me.rating) }}</span>
        </div>
        <div class="more__items">
<!--            <router-link class="more__item" tag="div" :to="{name: profileMenu.dialogs.routeName}">
                <img :src="'../../../assets/images/sprite.svg#' + profileMenu.dialogs.className" width="33" height="45" alt="pic">
                <span>{{ profileMenu.dialogs.label }}
                    <span class="more__item-active">2</span>
                </span>
            </router-link>-->
            <router-link class="more__item" tag="div" :to="{name: profileMenu.friends.routeName}">
                <img src="../../../assets/images/sprite.svg#more-friends" width="36" height="45" alt="pic">
                <span>{{ profileMenu.friends.label }}</span>
            </router-link>
<!--            <router-link class="more__item" tag="div" :to="{name: profileMenu.dialogs.routeName}">
                <img src="../../../assets/images/sprite.svg#more-wallet" width="33" height="45" alt="pic">
                <span>Кошелек</span>
            </router-link>
            <router-link class="more__item" tag="div" :to="{name: profileMenu.dialogs.routeName}">
                <img src="../../../assets/images/sprite.svg#more-blacklist" width="35" height="45" alt="pic">
                <span>Черный список</span>
            </router-link>-->
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
import {PROFILE_MENU} from '../../../config/config';

import LanguagesScreenSlider from './componets/LanguagesScreenSlider.vue';
import BaseButton from '../../../components/ui/button/BaseButton.vue';

export default {
    name: 'ProfilePreviewPage',
    components: {
        LanguagesScreenSlider,
        BaseButton,
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
    created() {
        this.profileMenu = PROFILE_MENU;
    }
};
</script>
<style src="./css/more.css"></style>