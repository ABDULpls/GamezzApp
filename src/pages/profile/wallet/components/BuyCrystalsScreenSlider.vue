<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">

		<template #header="{close}">

			<div class="topbar">
				<button @click="close" class="btn btn-back topbar__left"></button>
				<span class="topbar__title topbar__left">Купить кристалы</span>
			</div>
		</template>
		<template #content>
			<buy-crystals-confirm
				:purchaseAmountString="purchaseAmountString"
				:priceString="priceString"
				:me="me"
				v-model:is-open="confirmationScreen"/>

			<div class="buy">
				<span>Выберите пакет кристаллов</span>
				<div class="buy__item buy__crystal-1">
					<span>2,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">2</button>
				</div>
				<div class="buy__item buy__crystal-1">
					<span>17,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">17</button>
				</div>
				<div class="buy__item buy__crystal-2">
					<span>34,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">34</button>
				</div>
				<div class="buy__item buy__crystal-3">
					<span>68,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">68</button>
				</div>
				<div class="buy__item buy__crystal-4">
					<span>170,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">170</button>
				</div>
				<div class="buy__item buy__crystal-5">
					<span>170,000</span>
					<button @click="openConfirmationScreen" class="buy__btn btn-gamezz btn btn-border">170</button>
				</div>
			</div>

		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from "../../../../components/screen-slider/ScreenSlider.vue";
import BuyCrystalsConfirm from "./BuyCrystalsConfirm.vue";
import {mapState} from "vuex";

export default {
	name: "BuyCrystalsScreenSlider",
	components: {BuyCrystalsConfirm, ScreenSlider},
	props: {
		me: {
			type: Object,
			default: () => ({})
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
		openBuyCrystals: Function
	},
	data() {
		return {
			confirmationScreen: false,
			price:null,
			purchaseAmount: null,
			priceString: '',
			purchaseAmountString: '',
		};
	},
	computed: {
		...mapState({
			modalIsOpen: state => state.modalIsOpen
		}),
	},
	watch: {
		modalIsOpen() {
			if (!this.modalIsOpen) {
				if (this.confirmationScreen && this.isOpen) {
					this.openBuyCrystals();
					this.$store.dispatch('setModal', true);
				}
				this.confirmationScreen = false;
			}
		},
		// confirmationScreen() {
		// 	this.$store.dispatch('setModal', this.confirmationScreen);
		// 	if (this.confirmationScreen)
		// 		document.querySelector('body').style.overflowY = 'hidden';
		// 	else
		// 		document.querySelector('body').style.overflowY = 'auto';
		// },

	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		openConfirmationScreen(e) {
			this.purchaseAmountString = e.target.previousSibling.innerHTML;
			this.priceString = e.target.innerHTML;
			this.confirmationScreen = true;
		}
	}

};
</script>

<style src="../css/wallet.css">

</style>
