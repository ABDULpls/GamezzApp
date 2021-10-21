<template>
	<div class="gamecreate">

		<div class="topbar">
			<span class="topbar__title topbar__left">{{ this.game.name }}</span>
			<!--			<user-widget :user="me" />-->
			<button @click="$router.go(-1)" class="btn btn-close"/>
		</div>

		<div class="gamecreate__item">
			<span class="gamecreate__span">Сложность:</span>
			<base-select v-model:value="difficulty" :options="difficulties"/>
		</div>
		<div class="gamecreate__item">
			<span class="gamecreate__span">Тематика:</span>
			<base-select v-model:value="theme" :options="themes"/>
		</div>
		<div class="gamecreate__item">
			<span class="gamecreate__span">Игра:</span>
			<button @click="toSinglePlayer" :class="singlePlayerClass" class="gamecreate__btn btn ">Одиночная</button>
			<button @click="toMultiPlayer" :class="multiPlayerClass" class="  gamecreate__btn btn ">Человек</button>
		</div>
		<div class="gamecreate__item">
			<span class="gamecreate__span">Интерес:</span>
			<button @click="toCrystalBet" :class="crystalClass" class="gamecreate__btn btn ">Кристаллы</button>
			<button @click="toRatingBet" :class="ratingClass" class="gamecreate__btn btn">Рейтинг</button>
		</div>
		<div :class="betLockClass" class="gamecreate__item">
			<span class="gamecreate__span">Игроков за столом:</span>
			<button @click="playersAmount = 2" :class="twoPlayersClass" class="gamecreate__btn btn gamecreate__btn-small">2</button>
			<button @click="playersAmount = 3" :class="threePlayersClass" class="gamecreate__btn btn gamecreate__btn-small ">3</button>
			<button @click="playersAmount = 4" :class="fourPlayersClass" class="gamecreate__btn btn gamecreate__btn-small">4</button>
		</div>
		<div :class="betLockClass" class="gamecreate__bet ">
			<span :class="{'bet-label-lock': isSinglePlayer}" class="gamecreate__bet-label ">Размер интереса</span>
			<span :class="betImgClass, betLockClass" class="gamecreate__bet-value">{{ betValue }}</span>
			<button @click="setMaxBet" v-if="!isSinglePlayer" class="gamecreate__bet-max btn">Макс.</button>
			<div class="gamecreate__range-container">
				<input :value="betValue"
					   @input=" calcRangeProgress"
					   :style="{backgroundSize: rangeProgress}"
					   :class="{'gamecreate__range-lock': isSinglePlayer}"
					   :disabled="isSinglePlayer"
					   :step="betStep"
					   type="range"
					   class="gamecreate__range"
					   :min="minBet"
					   :max="maxBet"
				>

			</div>
		</div>
		<transition-group name="fade-scale" duration="300">
			<div v-if="!isSinglePlayer" class="gamecreate__password">
				<span>Вход по паролю</span>
				<label class="switch">
					<input v-model='withPassword' class="switch__checkbox" type="checkbox">
					<span class="switch__slider"></span>
				</label>
				<transition-group name="fade-scale" duration="300">
					<label v-if="withPassword" class="input__label input-password">
						<input type="text" class="input" placeholder="Пароль" v-model="password">
					</label>
				</transition-group>
			</div>
		</transition-group>
		<button class="btn btn-orange gamecreate__start">Начать игру</button>
	</div>
</template>

<script>
import UserWidget from "../../components/ui/UserWidget.vue";
import BaseButton from "../../components/ui/button/BaseButton.vue";
import BaseSelect from "../../components/ui/select/BaseSelect.vue";
import gamesApi from "../../api/games.api";

export default {
	name: "GameCreation",
	components: {
		BaseSelect,
		UserWidget,
		BaseButton,
	},
	props: {},
	data() {
		return {
			game: {},
			difficulty: 'Легко',
			difficulties: ['Легко', 'Нормально', 'Сложно'],
			theme: 'История',
			themes: ['История', 'Искусство', 'География'],
			isSinglePlayer: true,
			isRating: true,
			betValue: 2500,
			betStep: 500,
			minBet: 2500,
			maxBet: 10000,
			playersAmount: 2,
			withPassword: false,
			password: '',
			rangeProgress: 0,
		};
	},
	computed: {
		singlePlayerClass() {
			return {' btn-blue': this.isSinglePlayer};
		},
		multiPlayerClass() {
			return {'btn-orange': !this.isSinglePlayer};
		},
		ratingClass() {
			return {'btn-orange': this.isRating};
		},
		crystalClass() {
			return {'btn-blue ': !this.isRating};
		},
		twoPlayersClass() {
			if (this.isSinglePlayer)
				return {'betLockClass': this.isSinglePlayer};
			else
				return {'btn-green': this.playersAmount === 2};
		},
		threePlayersClass() {
			if (this.isSinglePlayer)
				return {'betLockClass': this.isSinglePlayer};
			else
				return {'btn-green': this.playersAmount === 3};
		},
		fourPlayersClass() {
			if (this.isSinglePlayer)
				return {'betLockClass': this.isSinglePlayer};
			else
				return {'btn-green': this.playersAmount === 4};
		},

		betImgClass() {
			return {
				'bet-stars': this.isRating,
				'bet-crystals': !this.isRating
			};
		},
		betLockClass() {
			return {'gamecreate__bet-locked': this.isSinglePlayer};
		}

	},
	methods: {
		toSinglePlayer() {
			this.isSinglePlayer = true;
			this.withPassword = false;
			this.password = '';
		},
		calcRangeProgress(e) {
			this.betValue = e.target.value;
			if (this.betValue === null)
				return 0;
			this.rangeProgress = (this.betValue - this.minBet) / (this.maxBet - this.minBet) * 100 + '%';
		},
		toMultiPlayer() {
			this.isSinglePlayer = false;
		},
		toRatingBet() {
			this.isRating = true;
		},
		toCrystalBet() {
			this.isRating = false;
		},
		setMaxBet() {
			this.betValue = this.maxBet
			this.rangeProgress = '100%'
		},
		async fetchGame(slug) {
			try {
				const response = await gamesApi.fetchGame(slug);
				this.game = response.data;
			} catch (err) {
				console.log(err);
			}
		}

	},
	created() {
		this.fetchGame(this.slug);
	}
};
</script>

<style src="./css/gamecreate.css">

</style>
