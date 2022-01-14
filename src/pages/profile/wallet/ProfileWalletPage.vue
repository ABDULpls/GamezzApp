<template>
	<h1 class="page-title">Кошелек</h1>
	<div class="miniprofile miniprofile-fix">
		<user-widget :user="me"/>
	</div>
	<div class="wallet">
		<span class="wallet__heading">Текущий баланс</span>
		<div class="wallet__item">
			<span class="wallet__mode">Gamezz</span>
			<span class="wallet__balance balance-gamezz">90</span>
			<span @click="openBuyGamezz" class="wallet__buy">&plus;&nbsp;Купить</span>
		</div>
		<div class="wallet__item">
			<span class="wallet__mode">Кристаллы</span>
			<span class="wallet__balance balance-crystals">{{ normalizeNumber(me.crystals) }}</span>
			<span @click="openBuyCrystals" class="wallet__buy">&plus;&nbsp;Купить</span>
		</div>
		<span class="wallet__heading">Основной способ оплаты</span>

		<div :key="method.id" v-for="method in paymentMethods"
			:ref="method.id" @click="changePaymentMethod(method.id)" class="wallet__pay">
			<svg :class="'wallet-' + method.id">
				<use :href="method.img"></use>
			</svg>
			<span class="wallet__pay-text">{{method.name}}</span>
		</div>
<!--		<div ref="card" @click="changePaymentMethod('card')" class="wallet__pay wallet__pay-chosen">-->
<!--			<svg class="wallet-card">-->
<!--				<use xlink:href=""></use>-->
<!--			</svg>-->
<!--			<span class="wallet__pay-text">Банковская карта</span>-->
<!--		</div>-->
<!--		<div ref="ym" @click="changePaymentMethod('ym')" class="wallet__pay ">-->
<!--			<svg class="wallet-ym">-->
<!--				<use :href=""></use>-->
<!--			</svg>-->
<!--			<span class="wallet__pay-text">Яндекс Деньги</span>-->
<!--		</div>-->
		<span class="wallet__heading">История покупок</span>
		<div class="wallet__history">
			<span class="wallet__order">14 Gamezz</span>
			<span class="wallet__price">75&nbsp;&#8381;</span>
			<span class="wallet__details">&#35;548&nbsp;&bull;&nbsp;28.12.20, 17:10</span>
			<span class="wallet__status wallet__status-done">Выполнен</span>

			<span class="wallet__method history-card">Банковская карта</span>
			<span class="wallet__hash">277bfb 02-000f-5000-9000-1f0dc76d7c23</span>
		</div>
		<div class="wallet__history">
			<span class="wallet__order">57 Gamezz</span>
			<span class="wallet__price">1,499&nbsp;&#8381;</span>
			<span class="wallet__details">&#35;548&nbsp;&bull;&nbsp;28.12.20, 17:10</span>
			<span class="wallet__status wallet__status-done">Выполнен</span>
			<span class="wallet__method history-card">Банковская карта</span>
			<span class="wallet__hash">277bfb 02-000f-5000-9000-1f0dc76d7c23</span>
		</div>
		<div class="wallet__history">
			<span class="wallet__order">14 Gamezz</span>
			<span class="wallet__price">75&nbsp;&#8381;</span>
			<span class="wallet__details">&#35;548&nbsp;&bull;&nbsp;28.12.20, 17:10</span>
			<span class="wallet__status wallet__status-cancel">Отменен</span>
			<span class="wallet__method history-ym">Яндекс Деньги</span>
			<span class="wallet__hash">277bfb 02-000f-5000-9000-1f0dc76d7c23</span>
		</div>
	</div>
	<buy-crystals-screen-slider
		:me="me"
		:openBuyCrystals="openBuyCrystals"
		v-model:is-open="buyCrystalsScreen"/>
	<buy-gamezz-screen-slider
		:me="me"
		:openBuyGamezz="openBuyGamezz"
		v-model:is-open="buyGamezzScreen"/>

</template>

<script>

import {mapState} from "vuex";
import {normalizeNumber} from "../../../utils/utils";
import UserWidget from "../../../components/ui/UserWidget.vue";
import BuyCrystalsScreenSlider from "./components/BuyCrystalsScreenSlider.vue";
import BuyCrystalsConfirm from "./components/BuyCrystalsConfirm.vue";
import BuyGamezzScreenSlider from "./components/BuyGamezzScreenSlider.vue";

export default {
	name: "ProfileWalletPage",
	components: {
		BuyGamezzScreenSlider,
		BuyCrystalsScreenSlider,
		BuyCrystalsConfirm,
		UserWidget
	},

	data() {
		return {
			buyCrystalsScreen: false,
			buyGamezzScreen: false,
			confirmationScreen: false,
			price: 0,
			purchaseAmount: 0,
			paymentMethods: [
				{
					id: 'card',
					name: 'Банковская карта',
					isChosen: false,
					img: '../../src/assets/images/sprite.svg#wallet-card'
				},
				{
					id: 'ym',
					name: 'Яндекс Деньги',
					isChosen: false,
					img: '../../src/assets/images/sprite.svg#wallet-ym',
				},
				{
					id: 'paypal',
					name: 'PayPal',
					isChosen: false,
					img: '../../src/assets/images/sprite.svg#wallet-ym',

				}
			]
		};
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
				this.buyCrystalsScreen = false;
				this.buyGamezzScreen = false;
			}
		},
		buyCrystalsScreen() {
			this.$store.dispatch('setModal', this.buyCrystalsScreen);
			if (this.buyCrystalsScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},
		buyGamezzScreen() {
			this.$store.dispatch('setModal', this.buyGamezzScreen);
			if (this.buyGamezzScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		}
	},
	methods: {
		normalizeNumber,
		openBuyCrystals() {
			this.buyCrystalsScreen = true;
		},
		openBuyGamezz() {
			this.buyGamezzScreen = true;
		},
		openConfirmationScreen(e) {
			this.purchaseAmount = +e.target.previousSibling.innerHTML;
			this.price = +e.target.previousSibling.innerHTML;
			this.confirmationScreen = true;
		},
		changePaymentMethod(id) {
			for (let method of this.paymentMethods) {
				if (method.id === id) {
					method.isChosen = true;
					this.$refs[`${id}`].classList.add('wallet__pay-chosen')
				}
				else {
					method.isChosen = false;
					this.$refs[`${method.id}`]?.classList.remove('wallet__pay-chosen')
				}
			}
		}
	}
};
</script>

<style src="./css/wallet.css">

</style>
