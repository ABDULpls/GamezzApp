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
					<span class="clearform">Сбросить</span>
					<input class="filter__radio" type="radio" id="all" name="status">
					<label class="filter__label" for="all">Все</label>
					<input class="filter__radio" type="radio" id="only-my" name="status">
					<label class="filter__label" for="only-my">Участвую</label>
					<input class="filter__radio" type="radio" id="not-my" name="status">
					<label class="filter__label" for="not-my">Не участвую</label>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Игра</summary>
					<span class="clearform">Сбросить</span>
					<input class="filter__checkbox" type="checkbox" id="filter1">
					<label class="filter__label" for="filter1">Дурак простой</label>
					<input class="filter__checkbox" type="checkbox" id="filter2">
					<label class="filter__label" for="filter2">Дурак переводной</label>
					<input class="filter__checkbox" type="checkbox" id="filter3">
					<label class="filter__label" for="filter3">Шахматы</label>
					<input class="filter__checkbox" type="checkbox" id="filter4">
					<label class="filter__label" for="filter4">Нарды длинные</label>
					<input class="filter__checkbox" type="checkbox" id="filter5">
					<label class="filter__label" for="filter5">Нарды которткие</label>
					<input class="filter__checkbox" type="checkbox" id="filter6">
					<label class="filter__label" for="filter6">Реверси</label>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Начало</summary>
					<span class="clearform">Сбросить</span>
					<input class="filter__radio" type="radio" id="radiofilter1" name="start">
					<label class="filter__label" for="radiofilter1">Любое время</label>
					<input class="filter__radio" type="radio" id="radiofilter2" name="start">
					<label class="filter__label" for="radiofilter2">Ближайшие 24 часа</label>
					<input class="filter__radio" type="radio" id="radiofilter3" name="start">
					<label class="filter__label" for="radiofilter3">Ближайшие 3 дня</label>
					<input class="filter__radio" type="radio" id="radiofilter4" name="start">
					<label class="filter__label" for="radiofilter4">Ближайшие 7 дней</label>
					<input class="filter__radio" type="radio" id="radiofilter5" name="start">
					<label class="filter__label" for="radiofilter5">Ближайшие 30 дней</label>
				</details>
				<details class="filter__details">
					<summary class="filter__summary">Ставка на вход</summary>
					<span class="clearform">Сбросить</span>
					<fieldset class="filter__bet">
						<input type="text" :value="betValue1"/>
						<span>-</span>
						<input type="text" :value="betValue2"/>
					</fieldset>
					<div class="filter__range">
						<!--						<input class="filter__thumb" type="range" value="20" min="0" max="100">-->
						<!--						<input class="filter__thumb" type="range" value="70" min="0" max="100">-->
						<div class="gamecreate__range-container">
							<input :value="betValue1"
								   @input=" calcRangeProgress1"
								   :style="{backgroundSize: rangeProgress1}"
								   :step="betStep"
								   type="range"
								   class="gamecreate__range gamecreate__range-left"
								   :min="0"
								   :max="maxBet1"
							>
							<input :value="betValue2"
								   @input=" calcRangeProgress2"
								   :style="{backgroundSize: rangeProgress2}"
								   :step="betStep"
								   type="range"
								   class="gamecreate__range gamecreate__range-right"
								   :min="minBet2"
								   :max="maxBet"
							>
						</div>
					</div>
				</details>
				<details class="filter__details noborder">
					<summary class="filter__summary">Минимальный уровень</summary>
					<span class="clearform">Сбросить</span>
					<label class="filter__level">
						<input type="text" value="8">
						<span class="text-gradient">Поставить мой уровень</span>
					</label>
				</details>
				<div class="filter__btns">
					<button class="filter__btn-clear btn">Очистить все</button>
					<button class="filter__btn-submit btn btn-orange">Применить</button>
				</div>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import {MAX_BET} from "../../../config/tournament";

export default {
	name: "TournamentsFilterScreenSlider",
	components: {ScreenSlider},
	data() {
		return {
			betValue1: 1000,
			betStep: 1000,
			minBet: 100,
			maxBet1: 10000,
			rangeProgress1: 0,
			betValue2: 50000,
			minBet2: this.maxBet1 + this.betStep,
			maxBet: MAX_BET,
			rangeProgress2: 0,

		};
	},
	emits: {
		'update:is-open': null,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		calcRangeProgress1(e = false) {
			if (e) {
				this.betValue1 = e.target.value;
				if (this.betValue1 > this.betValue2 - this.betStep) {
					this.betValue2 = +this.betValue1 + this.betStep;
				}
				this.calcRangeProgress2();
			}
			if (this.betValue1 === null)
				return 0;
			this.rangeProgress1 = (this.betValue1 - this.minBet) / (this.maxBet1 - this.minBet) * 100 + '%';
		},
		calcRangeProgress2(e = false) {
			if (e) {
				this.betValue2 = e.target.value;
				if (this.betValue2 - this.betStep < this.betValue1) {
					this.betValue1 = +this.betValue2 - this.betStep;
				}
				this.calcRangeProgress1();
			}
			if (this.betValue2 === null)
				return 0;
			this.rangeProgress2 = (this.betValue2 - this.minBet) / (this.maxBet - this.minBet) * 100 + '%';
			console.log(this.rangeProgress2);
		},
	}
};
</script>

<style src="../css/filter.css">

</style>
