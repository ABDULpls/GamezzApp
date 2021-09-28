<template>
    <div>
        <page-top-bar game-options>
            <span class="topbar__title topbar__left">Викторина</span>
            <user-widget :user="me" />
        </page-top-bar>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import PageTopBar from '../../components/PageTopBar.vue';
import UserWidget from '../../components/ui/UserWidget.vue';

export default {
    name: 'QuizPage',
    components: {UserWidget, PageTopBar},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),
    },
    methods: {},
    created() {}
};
</script>

<style></style>
