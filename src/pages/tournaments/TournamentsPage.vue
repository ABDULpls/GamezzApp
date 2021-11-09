
<template>

    <div class="tournaments">
        <span class="tournaments__title">Турниры</span>
        <span class="tournaments__filter">2</span>
        <span class="tournaments__mode tournaments__mode-active">Все</span>
        <span class="tournaments__mode">Участвую</span>
        <span class="tournaments__mode">Не участвую</span>
        <div :key="index" v-for="(tournament, index) in this.tournaments" class="tournament">
            <picture class="game-reversi tournament__bg">
                <source :srcset="tournament.img" type="image/webp">
                <img class="tournament__img" height="160" :src="tournament.img"
                     :alt="tournament.name"
                     loading="lazy">
            </picture>
            <div class="tournament__item">
                <span class="tournament__game">{{tournament.game}}</span>
                <span class="tournament__prize">{{normalizeNumber(tournament.prize)}} призовой фонд</span>
            </div>
            <span class="tournament__details">Ставка на вход:</span>
            <span class="tournament__details">Мин. уровень:</span>
            <span class="tournament__details">Макс. игроков:</span>
            <span class="tournament__bet">{{    tournament.bet}}</span>
            <span class="tournament__level">{{tournament.minLvl}}</span>
            <span class="tournament__players">{{tournament.maxPlayers}}</span>
            <div v-if="participation(index)" class="tournament__button">
                <span class="tournament__status">Участвую</span>
                <button class="tournament__cancel btn btn-border">Отказаться</button>
            </div>
            <button v-else class="tournament__join btn btn-orange">Участвовать</button>
            <span class="tournament__date">3 апреля, 21:00</span>
            <span class="tournament__timer">1д 2ч 18м</span>
        </div>


    </div>
</template>

<script>

    import tournamentsApi from "../../api/tournaments.api.js";
    import {mapState} from "vuex";
    import {normalizeNumber} from "../../utils/utils.js";

    export default {
        name: 'TournamentsPage',
        data() {
            return {
                tournaments: null,

            }
        },
        created() {
            this.fetchTournaments()
            console.log(this.tournaments)
            console.log(this.me)
        },
        computed: {
            ...mapState({
                me: state => state.auth.user,
                modalIsOpen: state => state.modalIsOpen
            }),


        },
        methods: {
            normalizeNumber,
            participatedTournaments() {
                this.tournaments.filter(()=> {

                })
            },
            participation(index) {
                for (let participant of this.tournaments[index].participants){
                    console.log(participant.id)
                    console.log(this.me.id )
                    console.log(index + ' inesx')
                    if (participant.id === this.me.id) {
                        console.log('true')
                        return true
                    }
                }
                return false
            },
            async fetchTournaments() {
                try {
                    const response = await tournamentsApi.fetchTournaments();
                    this.tournaments = response.data.tournaments;
                    console.log(this.tournaments)
                } catch (err) {
                    console.log(err);
                }
            },
        },
    };
</script>

<style src="./css/tournaments.css"></style>
