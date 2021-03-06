<template>

	<div class="tournaments">
		<span class="tournaments__title">Турниры</span>
		<span @click="openAdvancedFilters" class="tournaments__filter">{{ appliedFiltersNumber }}</span>

		<span v-for="(filter,key) in filters" @click="selectFilter(key)" :class="filterClasses(key)" class="tournaments__mode">
			{{ filter.name }}
			<!--			({{ filter.value }})-->
		</span>
		<transition-group name="fade-slide" duration="500">

			<div :key="index" v-for="(tournament, index) in this.filteredTournaments" class="tournament">
				<picture class="game-reversi tournament__bg">
					<source :srcset="tournament.img" type="image/webp">
					<img class="tournament__img" height="160" :src="tournament.img"
						 :alt="tournament.name"
						 loading="lazy">
				</picture>
				<div class="tournament__item">
					<span class="tournament__game">{{ tournament.game }}</span>
					<span class="tournament__prize">{{ normalizeNumber(tournament.prize) }} призовой фонд</span>
				</div>
				<span class="tournament__details">Ставка на вход:</span>
				<span class="tournament__details">Мин. уровень:</span>
				<span class="tournament__details">Макс. игроков:</span>
				<span class="tournament__bet">{{ tournament.bet }}</span>
				<span class="tournament__level">{{ tournament.minLvl }}</span>
				<span class="tournament__players">{{ tournament.maxPlayers }}</span>
				<div v-if="participation(index)" class="tournament__button">
					<span class="tournament__status">Участвую</span>
					<button class="tournament__cancel btn btn-border">Отказаться</button>
				</div>
				<button v-else class="tournament__join btn btn-orange">Участвовать</button>
				<span class="tournament__date">3 апреля, 21:00</span>
				<span class="tournament__timer">1д 2ч 18м</span>
			</div>
		</transition-group>

	</div>
	<tournaments-filter-screen-slider @filtersChange="filtersChange" v-model:is-open="advancedFiltersScreen"/>
</template>

<script>

import tournamentsApi from "../../api/tournaments.api.js";
import {mapState} from "vuex";
import {normalizeNumber} from "../../utils/utils.js";
import {DEFAULT_TOURNAMENT_FILTER_KEY} from "../../config/tournament.js";
import TournamentsFilterScreenSlider from "./components/TournamentsFilterScreenSlider.vue";
import {MAX_BET, MIN_BET} from "../../config/tournament";

export default {
	name: 'TournamentsPage',
	components: {TournamentsFilterScreenSlider},
	data() {
		return {
			tournaments: null,
			currentFilter: DEFAULT_TOURNAMENT_FILTER_KEY,
			filters: {
				all: {value: 0, name: "Все"},
				participating: {value: 0, name: "Участвую"},
				nonparticipating: {value: 0, name: "Не участвую"},
			},
			advancedFilters: [],
			appliedFiltersNumber: 0,
			filteredTournaments: [],
			advancedFiltersScreen: false,
		};
	},
	created() {
		this.fetchTournaments();
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
			modalIsOpen: state => state.modalIsOpen
		}),


	},
	watch: {
		modalIsOpen(state, prevState) {
			if (state === false && prevState === true) {
				this.advancedFiltersScreen = false;
			}
		},
		currentFilter() {
			if (this.currentFilter === DEFAULT_TOURNAMENT_FILTER_KEY)
				this.filteredTournaments = this.tournaments;
			else {
				if (this.currentFilter === 'participating') {
					this.$nextTick();
					this.filteredTournaments = this.participatedTournaments();
				} else {
					this.$nextTick();
					this.filteredTournaments = this.notParticipatedTournaments();
				}
			}
		},
		advancedFiltersScreen() {
			this.$store.dispatch('setModal', this.advancedFiltersScreen);
			if (this.advancedFiltersScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
	},
	methods: {
		normalizeNumber,
		participatedTournaments() {
			return this.tournaments.filter((el) => {
				const includesMe = () => {
					for (let participant in el.participants) {
						if (el.id === this.me.id) {
							return true;
						}
					}
				};
				if (includesMe())
					return true;
			});
		},
		notParticipatedTournaments() {
			const includesMe = (el) => {
				for (let participant in el.participants) {
					if (el.id !== this.me.id) {
						return true;
					}
				}

			};
			return this.tournaments.filter((el) => {
				if (includesMe(el))
					return true;
			});
		},
		openAdvancedFilters() {
			this.advancedFiltersScreen = true;
		},
		selectFilter(key) {
			if (typeof key !== 'string')
				key = '';
			this.currentFilter = key;
		},
		filtersChange(filters) {
			this.appliedFiltersNumber = 0;
			if (filters.betValue1 > MIN_BET || filters.betValue2 !== MAX_BET) {
				this.appliedFiltersNumber++;
			}
			if (filters.statusFilterValue !== null)
				this.appliedFiltersNumber++;
			if (filters.timeFilterValue !== null)
				this.appliedFiltersNumber++;
			if (filters.gamesFilterValue.length > 0)
				this.appliedFiltersNumber++;
			if (filters.minLvlFilterValue > 0)
				this.appliedFiltersNumber++;
			this.advancedFilters = filters;
			console.log(this.advancedFilters);
		},
		filterClasses(key) {
			return {'tournaments__mode-active': key === this.currentFilter};
		},
		participation(index) {
			for (let participant of this.filteredTournaments[index].participants) {
				if (participant.id === this.me.id) {
					return true;
				}
			}
			return false;
		},
		async fetchTournaments() {
			try {
				const response = await tournamentsApi.fetchTournaments();
				this.tournaments = response.data.tournaments;
				this.filteredTournaments = this.tournaments;
				this.filters.participating.value = this.participatedTournaments().length;
				this.filters.all.value = this.tournaments.length;
				this.filters.nonparticipating.value = this.filters.all.value - this.filters.participating.value;
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style src="./css/tournaments.css"></style>
