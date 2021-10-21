<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">

		<template #header="{close}">

			<div class="topbar">
				<button @click="close" class="btn btn-back topbar__left"></button>
				<span class="topbar__title topbar__left">Купить кристалы</span>
			</div>
		</template>
		<template #content>
			<buy-gamezz-confirm
				:purchaseAmount="purchaseAmount"
				:price="price"
				:me="me"
				v-model:is-open="confirmationScreen"/>

			<div class="buy">
				<span>Выберите пакет GAMEZZ</span>

				<div v-for="(pack, index) in packages" :class="pack.class" class="buy__item ">
					<div>
						<span class="buy-gamezz">{{ pack.gamezz }}</span>
						<p v-if="pack.bonus" class="text-gradient buy__bonus">
							<span class="gamezz-bonus text-gradient">
								&plus;{{ pack.bonus }}
							</span>
							в подарок
						</p>
					</div>
					<button @click="(e) =>openConfirmationScreen(e,pack)"
							class="buy__btn btn btn-border">
						{{ pack.roubles }} &#8381;
					</button>
				</div>

			</div>

		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from "../../../../components/screen-slider/ScreenSlider.vue";
import BuyGamezzConfirm from "./BuyGamezzConfirm.vue";
import {mapState} from "vuex";

export default {
	name: "BuyGamezzScreenSlider",
	components: {BuyGamezzConfirm, ScreenSlider},
	props: {
		me: {
			type: Object,
			default: () => ({})
		},
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			confirmationScreen: false,
			priceString: '',
			purchaseAmountString: '',
			packages: [
				{
					gamezz: 3,
					roubles: 75,
					bonus: 0,
					class: 'buy__gamezz-1'
				},
				{
					gamezz: 14,
					roubles: 379,
					bonus: 0,
					class: 'buy__gamezz-1'

				},
				{
					gamezz: 28,
					roubles: 749,
					bonus: 2,
					class: 'buy__gamezz-2'

				},
				{
					gamezz: 57,
					roubles: 1499,
					bonus: 5,
					class: 'buy__gamezz-3'

				},
				{
					gamezz: 143,
					roubles: 3749,
					bonus: 15,
					class: 'buy__gamezz-4'

				},
				{
					gamezz: 286,
					roubles: 7490,
					bonus: 28,
					class: 'buy__gamezz-5'

				},
			]
		};
	},
	computed: {
		...mapState({
			modalIsOpen: state => state.modalIsOpen
		}),
	},
	watch: {
		modalIsOpen() {
			if (this.modalIsOpen === false) {
				this.$emit('update:is-open', false);
				this.confirmationScreen = false
			}
		},
		confirmationScreen() {
			this.$store.dispatch('setModal', this.confirmationScreen);
			if (this.confirmationScreen)
				document.querySelector('body').style.overflowY = 'hidden';
			else
				document.querySelector('body').style.overflowY = 'auto';
		},

	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		openConfirmationScreen(e, pack) {

			this.purchaseAmount = pack.gamezz;
			this.price = pack.roubles;

			this.confirmationScreen = true;

		},

	}

};
</script>

<style src="../css/wallet.css">

</style>
