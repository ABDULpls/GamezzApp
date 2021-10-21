<template>
	<div class="buy">

		<screen-slider transition-name="fade" :is-open="isOpen" @update:is-open="onUpdateIsOpen">
			<template #header="{close}">
				<div class="topbar">
					<button @click="close" class="btn btn-back topbar__left"></button>
					<span class="topbar__title topbar__left">Подтвердить покупку</span>
				</div>
			</template>
			<template #content>
					<div class="buy-modal">
						<span class="buy-modal__heading">Вы покупаете:</span>
						<span class="buy-modal__gamezz">{{purchaseAmount}}</span>
						<button class="buy-modal__btn btn btn-orange">Купить</button>
						<span class="buy-modal__text">С вашего счета будет списано:</span>
						<span>{{price}} рублей</span>
					</div>
			</template>
		</screen-slider>
	</div>
</template>
<script>
import ScreenSlider from "../../../../components/screen-slider/ScreenSlider.vue";
import {mapState} from "vuex";

export default {
	name: "BuyGamezzConfirm",
	components: {ScreenSlider},
	props: {
		me: {
			type: Object,
			default: () => ({})
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
		price: {
			type: Number,
			default: 0
		},
		purchaseAmount :{
			type: Number,
			default: 0
		}
		// priceString: {
		// 	type: String,
		// 	default: '0',
		// },
		// purchaseAmountString: {
		// 	type: String,
		// }
	},
	data() {
		return {
			// price:0,
			// purchaseAmount:0
		}
	},
	watch: {
		// purchaseAmountString() {
		// 	this.purchaseAmount = +this.purchaseAmountString.replace(/\D/g,'')
		// },
		// priceString() {
		// 	this.price = +this.priceString.replace(/\D/g,'')
		// },
	},
	computed:{
		...mapState({
			modalIsOpen: state => state.modalIsOpen
		})
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		modalIsOpen() {
			if (this.modalIsOpen === false) {
				this.$emit('update:is-open', false);
			}
		},

	}
};
</script>

<style src="../css/wallet.css">

</style>
