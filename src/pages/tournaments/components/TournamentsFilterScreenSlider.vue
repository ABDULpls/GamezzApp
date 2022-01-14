<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header>
			<div class="topbar">
				<span class="topbar__title topbar__left">Фильтры</span>
				<button @click="onUpdateIsOpen(false)" class="btn btn-close"></button>
			</div>
		</template>
		<template #content>

			<div class="filter">
				<details class="filter__details">
					<summary class="filter__summary">Статус</summary>

					<button @click="resetStatus" class="clearform">Сбросить</button>
					<div :key="index" v-for="(status,index) in statusFilters">
						<input v-model="statusFilterValue" :value="status.value" class="filter__radio" type="radio" :id="'statusFilter'+index"
							   name="status">
						<label class="filter__label" :for="'statusFilter'+index">{{ status.text }}</label>
					</div>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Игра</summary>
					<button @click="resetGames" class="clearform">Сбросить</button>
					<div :key="index" v-for="(game,index) in gameFilters">
						<input @click="selectGame(index)" v-model="game.selected" class="filter__checkbox" type="checkbox" :id="'filter'+index">
						<label class="filter__label" :for="'filter'+index">{{ game.name }}</label>
					</div>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Начало</summary>
					<button @click="resetTime" class="clearform">Сбросить</button>
					<div :key="index" v-for="(time,index) in timeFilters">
						<input v-model="timeFilterValue" :value="time.value" class="filter__radio" type="radio" :id="'timeFilter'+index"
							   name="start">
						<label class="filter__label" :for="'timeFilter'+index">{{ time.text }}</label>
					</div>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Ставка на вход</summary>
					<button @click="resetBet" class="clearform">Сбросить</button>
					<fieldset class="filter__bet">
						<input type="text" :value="betValue1"/>
						<span>-</span>
						<input type="text" :value="betValue2"/>
					</fieldset>
					<div class="filter__range">
						<!--						<input class="filter__thumb" type="range" value="20" min="0" max="100">-->
						<!--						<input class="filter__thumb" type="range" value="70" min="0" max="100">-->
						<div class="gamecreate__range-container gamecreate__range-absolute">
							<input :value="betValue1"
								   @input=" calcRangeProgress1"
								   :style="{background: backgroundString}"
								   :step="betStep"
								   type="range"
								   class="gamecreate__range gamecreate__range-left gamecreate__range-absolute"
								   :min="minBet"
								   :max="maxBet"
							>
							<input :value="betValue2"
								   @input=" calcRangeProgress2"
								   :step="betStep"
								   type="range"
								   class="gamecreate__range gamecreate__range-right"
								   :min="minBet"
								   :max="maxBet"
							>
						</div>
					</div>
				</details>
				<details class="filter__details noborder">
					<summary class="filter__summary">Минимальный уровень</summary>
					<button @click="resetMinLvl" class="clearform">Сбросить</button>
					<label class="filter__level">
						<input v-model="minLvlFilterValue"  type="number">
						<span @click="setMyLvl" class="text-gradient">Поставить мой уровень</span>
					</label>
				</details>
				<div class="filter__btns">
					<button @click="resetFilters" class="filter__btn-clear btn">Очистить все</button>
					<button @click="emitFilters" class="filter__btn-submit btn btn-orange">Применить</button>
				</div>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import {MAX_BET, MIN_BET} from "../../../config/tournament";
import {mapState} from "vuex";

export default {
	name: "TournamentsFilterScreenSlider",
	components: {ScreenSlider},

	data() {
		return {
			betValue1: 1000,
			betStep: 1000,
			minBet: 0,
			maxBet1: 10000,
			rangeProgress1: '0%',
			betValue2: MAX_BET,
			minBet2: this.maxBet1 + this.betStep,
			maxBet: MAX_BET,
			rangeProgress2: '100%',
			timeFilterValue: null,
			statusFilterValue: null,
			minLvlFilterValue: 0,
			gameFilters: [
				{
					name: 'Дурак простой',
					selected: false,
				},
				{
					name: 'Дурак переводной',
					selected: false,
				},
				{
					name: 'Шахматы',
					selected: false,
				},
				{
					name: 'Нарды длинные',
					selected: false,
				},
				{
					name: 'Нарды короткие',
					selected: false,
				},
				{
					name: 'Реверси',
					selected: false,
				},
			],
			timeFilters: [
				{
					text: 'Любое время',
					value: 'any'
				},
				{
					text: 'Ближайшие 24 часа',
					value: '24h'
				},
				{
					text: 'Ближайшие 3 дня',
					value: '3d'
				},
				{
					text: 'Ближайшие 7 дней',
					value: '7d'
				},
				{
					text: 'Ближайшие 30 дней',
					value: '30d'
				},
			],
			statusFilters: [
				{
					text: 'Все',
					value: 'all',
				},
				{
					text: 'Участвую',
					value: 'participating'
				},
				{
					text: 'Не участвую',
					value: 'nonparticipating'
				}
			]


		};
	},
	emits: {
		'update:is-open': null,
		'filtersChange': null,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	watch: {},
	computed: {
		...mapState({
			me: state => state.auth.user,
		}),
		backgroundString() {
			return `linear-gradient(
			90deg,
			rgba(0,0,0,0) ${this.rangeProgress1},
			rgba(16,93,224,1) ${this.rangeProgress1},
			rgba(16,93,224,1) ${this.rangeProgress2},
			rgba(0,0,0,0) ${this.rangeProgress2},
			rgba(0,0,0,0) 100%
			)`;
		}
	},
	methods: {
		emitFilters(){
			const selectedGames=[]
			for (let i = 0; i< this.gameFilters.length; i++) {
				if (this.gameFilters[i].selected)
					selectedGames.push(this.gameFilters[i].name)
			}
			const filters = {
				betValue1: +this.betValue1,
				betValue2: +this.betValue2,
				gamesFilterValue: selectedGames,
				timeFilterValue: this.timeFilterValue,
				statusFilterValue: this.statusFilterValue,
				minLvlFilterValue: this.minLvlFilterValue
			}
			this.$emit('filtersChange', filters)
			this.onUpdateIsOpen(false)
		},
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		resetBet() {
			this.betValue1 = 0;
			this.betValue2 = MAX_BET;
			this.rangeProgress1 = '0%';
			this.rangeProgress2 = '100%';
		},
		resetGames() {
			for (let game of this.gameFilters) {
				game.selected = false;
			}
		},
		resetTime() {
			this.timeFilterValue = null;
		},
		resetStatus() {
			this.statusFilterValue = null;
		},
		resetMinLvl() {
			console.log(this.minLvlFilterValue);
			this.minLvlFilterValue = 0
		},
		resetFilters() {
			this.resetBet()
			this.resetGames()
			this.resetTime()
			this.resetStatus()
			this.resetMinLvl()
		},
		setMyLvl(){
			this.minLvlFilterValue = this.me.level
		},
		selectGame(index) {
			this.gameFilters[index].selected = !this.gameFilters[index].selected;
		},
		calcRangeProgress1(e = false) {
			if (e) {
				if (e.target.value >= MAX_BET) {
					return;
				}
				this.betValue1 = e.target.value;
				if (this.betValue1 > this.betValue2 - this.betStep) {
					this.betValue2 = +this.betValue1 + this.betStep;
				}
				this.calcRangeProgress2();
			}
			if (this.betValue1 === null)
				return 0;
			this.rangeProgress1 = Math.round((this.betValue1 - this.minBet) / (this.maxBet - this.minBet) * 100) + '%';
		},
		calcRangeProgress2(e = false) {
			if (e) {
				if (e.target.value < this.betStep) {
					return;
				}
				this.betValue2 = e.target.value;
				if (this.betValue2 - this.betStep < this.betValue1) {
					this.betValue1 = +this.betValue2 - this.betStep;
				}
				this.calcRangeProgress1();
			}
			this.rangeProgress2 = Math.round((this.betValue2 - this.minBet) / (this.maxBet - this.minBet) * 100) + '%';
		},
	}
};
</script>

<style src="../css/filter.css">

</style>
