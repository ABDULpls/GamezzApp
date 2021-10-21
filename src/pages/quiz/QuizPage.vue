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
                <span class="quiz__username name">{{ me.name }}</span>
                <span class="quiz__raiting text-gradient">#1 в общем рейтинге</span>
                <span class="quiz__time">{{ currentTimeInHuman }}</span>
                <progress-bar :time="startTime" />
            </div>
            <span class="quiz__stat-heading">6 сек</span>
            <span class="quiz__stat-heading">5</span>
            <span class="quiz__stat-heading">450</span>
            <span class="quiz__stat">сред. время ответа</span>
            <span class="quiz__stat">правильных ответов</span>
            <span class="quiz__stat">получено кристаллов</span>
            <p class="quiz__topics">
                <span class="text-gradient">Темы: </span>
                {{ activeSubjectsString }}
                <base-button class="btn btn-right btn-right-grey quiz__topics-icon" @click="toggleCurtain" />
            </p>
            <div class="quiz__window">
                <p class="quiz__text">
                    <span class="quiz__text-grey">Вопрос: </span>
                    В какой стране зародился архитектурный стиль ампир?
                </p>
                <img
                    class="gamechat__img"
                    src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png"
                    alt="player"
                    width="35"
                    height="35"
                >
                <span class="name quiz__name">Narntt</span>
                <span class="gamechat__msg gamechat__mymsg">Франция</span>
                <p class="quiz__text"><span class="quiz__text-green">Правильный ответ </span>за 12 сек.</p>
                <p class="quiz__text">Награда: <span class="quiz__crystals">450</span></p>

                <p class="quiz__text">
                    <span class="quiz__text-grey">Вопрос: </span>
                    В какой стране зародился архитектурный стиль ампир?
                </p>
            </div>
            <form class="quiz__textmsg">
                <input class="gamechat__input" type="text" placeholder="Ваш ответ">
                <base-button class="btn textbtn" />
            </form>
        </div>

        <curtain-slider v-model:is-open="subjectsCurtain">
            <template #title>
                <span class="quiz__modal-title">Выбрать темы викторины</span>
            </template>
            <template #content>
                <span
                    v-for="(subject, idx) in subjects"
                    :key="idx"
                    @click="selectSubject(subject)"
                    :class="{'border-gradient': activeSubjects.includes(subject)}"
                    class="quiz__modal-item"
                >{{ subject }}</span>
            </template>
        </curtain-slider>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import UserWidget from '../../components/ui/UserWidget.vue';
import BaseButton from '../../components/ui/button/BaseButton.vue';
import ProgressBar from '../../components/ui/progress/ProgressBar.vue';
import CurtainSlider from '../../components/curtain-slider/CurtainSlider.vue';
import {toHumanTime} from '../../utils/utils';

export default {
    name: 'QuizPage',
    components: {
        ProgressBar,
        UserWidget,
        BaseButton,
        CurtainSlider,
    },
    data() {
        return {
            timerId: null,
            startTime: 35,
            currentTime: 35,

            subjectsCurtain: false,
            activeSubjects: [],
            subjects: [
                'География',
                'Страны мира',
                'История',
                'Искусство',
                'Мифы Древней Греции',
            ],
        }
    },
    computed: {
        ...mapState({
            me: state => state.auth.user,
        }),

        currentTimeInHuman() {
            return toHumanTime(this.currentTime);
        },

        activeSubjectsString() {
            return this.activeSubjects.join(', ');
        }
    },
    methods: {
        mockTimer() {
            let currentTime = this.startTime;
            this.timerId = setInterval(() => {
                currentTime--;
                this.currentTime = currentTime;
                if (currentTime <= 0) {
                    currentTime = this.startTime;
                }
            }, 1000);
        },
        toggleCurtain() {
            this.subjectsCurtain = !this.subjectsCurtain;
        },

        selectSubject(subject) {
            const activeSubjectIndex = this.activeSubjects.indexOf(subject);

            if (activeSubjectIndex > -1) {
                if (this.activeSubjects.length <= 1) {
                    return;
                }

                this.activeSubjects.splice(activeSubjectIndex, 1);
            } else {
                this.activeSubjects.push(subject);
            }
        }
    },
    created() {
        this.mockTimer();
        this.activeSubjects = [...this.subjects];
    }
};
</script>

<style src="./css/quiz.css"></style>
<style src="./css/gamechat.css"></style>
