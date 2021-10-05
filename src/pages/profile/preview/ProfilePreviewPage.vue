<template>
    <div class="more">
        <profile-user-card :user="me">
            <template #link>
                <router-link :to="{name: 'ProfilePage'}" v-slot="{navigate}">
                    <base-button class="btn btn-right more__name-icon" @click="navigate" />
                </router-link>
            </template>
        </profile-user-card>

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
            </router-link>-->
            <router-link class="more__item" tag="div" :to="{name: profileMenu.blackList.routeName}">
                <img src="../../../assets/images/sprite.svg#more-blacklist" width="35" height="45" alt="pic">
                <span>Черный список</span>
            </router-link>
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
import {PROFILE_MENU} from '../../../config/config';

import ProfileUserCard from '../components/ProfileUserCard.vue';
import LanguagesScreenSlider from './componets/LanguagesScreenSlider.vue';
import BaseButton from '../../../components/ui/button/BaseButton.vue';

export default {
    name: 'ProfilePreviewPage',
    components: {
        LanguagesScreenSlider,
        ProfileUserCard,
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
    },
    created() {
        this.profileMenu = PROFILE_MENU;
    }
};
</script>
<style src="../css/more.css"></style>