<template>
    <div>
        <div class="topbar">
            <span class="topbar__title topbar__left">Викторина</span>

            <user-widget :user="me" />

            <base-button class="btn btn-more" />
        </div>

        <div class="quiz">
            <div class="quiz__user">
                <img class="quiz__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" width="49" height="49"
                     alt="user">
                <span class="quiz__username">{{ me.name }}</span>
                <span class="quiz__raiting text-gradient">#1 в общем рейтинге</span>
                <span class="quiz__time">00:35</span>
                <div class="quiz__progressbar"></div>
            </div>
            <span class="quiz__stat-heading">6 сек</span>
            <span class="quiz__stat-heading">5</span>
            <span class="quiz__stat-heading">450</span>
            <span class="quiz__stat">сред. время<br>ответа</span>
            <span class="quiz__stat">правильных ответов</span>
            <span class="quiz__stat">ролучено кристаллов</span>
            <p class="quiz__topics">
                <span class="text-gradient">Темы: </span>
                География, История, Искусство, Мифы Древней Греции
                <img src="../../assets/images/sprite.svg#open-modal" alt="topics" class="quiz__topics-icon" width="8" height="14">
            </p>
            <div class="quiz__window">
                <p class="quiz__text"><span class="quiz__text-grey">Вопрос: </span>В какой стране зародился
                    архитектурный стиль ампир?</p>
                <img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
                     height="35.61">
                <span class="gamechat__name">Narntt</span>
                <span class="gamechat__msg gamechat__mymsg">Франция</span>
                <p class="quiz__text"><span class="quiz__text-green">Правильный ответ </span>за 12 сек.</p>
                <p class="quiz__text">Награда: <span class="quiz__crystals">450</span></p>
                <p class="quiz__text"><span class="quiz__text-grey">Вопрос: </span>В какой стране зародился
                    архитектурный стиль ампир?</p>
            </div>
            <form class="quiz__textmsg">
                <input class="gamechat__input" type="text" placeholder="Ваш ответ">
                <img src="../../assets/images/sprite.svg#textbtn" alt="send" class="textbtn">
            </form>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex';
import UserWidget from '../../components/ui/UserWidget.vue';
import BaseButton from '../../components/ui/button/BaseButton.vue';

export default {
    name: 'QuizPage',
    components: {
        UserWidget,
        BaseButton,
    },
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

<style src="./css/quiz.css"></style>
<style src="./css/gamechat.css"></style>
