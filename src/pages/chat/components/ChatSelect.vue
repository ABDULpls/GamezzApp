<template>
			<div class="choosechat">
				<span class="choosechat__title">Выбрать чат</span>
				<div class="choosechat__scrollitems">
					<router-link tag="button" :to="{name:'ChatDialogs'} " replace>

						<div class="choosechat__item">
							<div class="choosechat__icon  choosechat__newmsg">
								<img src="../../../assets/images/sprite.svg#chat-private" alt="direct" width="25" height="25">
							</div>
							<span class="choosechat__people">5</span>
							<span class="choosechat__name">Личный</span>
						</div>
					</router-link>
					<router-link @click="closeModal" tag="button" :to="{name:'ChatGlobal'}" replace>

					<div  class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/sprite.svg#chat-public" alt="direct" width="25" height="25">
						</div>
						<span class="choosechat__people">1,282</span>
						<span class="choosechat__name">Общий</span>
					</div>
					</router-link>
					<div class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/lang.svg#ru" class="flag" alt="flag" width="25" height="25">
						</div>
						<span class="choosechat__people">921</span>
						<span class="choosechat__name">Русский</span>
					</div>
					<div class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/lang.svg#en" class="flag" alt="flag" width="25" height="25">
						</div>
						<span class="choosechat__people">241</span>
						<span class="choosechat__name">English</span>
					</div>
					<div class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/lang.svg#fr" class="flag" alt="flag" width="25" height="25">
						</div>
						<span class="choosechat__people">191</span>
						<span class="choosechat__name">French</span>
					</div>
					<div class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/lang.svg#it" class="flag" alt="flag" width="25" height="25">
						</div>
						<span class="choosechat__people">77</span>
						<span class="choosechat__name">Italian</span>
					</div>
					<div class="choosechat__item">
						<div class="choosechat__icon">
							<img src="../../../assets/images/lang.svg#es" class="flag" alt="flag" width="25" height="25">
						</div>
						<span class="choosechat__people">92</span>
						<span class="choosechat__name">Spanish</span>
					</div>
				</div>
			</div>

</template>

<script>
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import ClickOutside from "../../../components/ClickOutside.vue";

export default {
	name: "ChatSelect",
	components: {ScreenSlider, ClickOutside},
	emits: {
		'update:is-open': null,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		me: {
			type: Object,
			required: true,
		},

	},
	data() {
		return {
			isActive: false
		};
	},

	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		close() {
			this.onUpdateIsOpen(false)
		},

		closeModal() {
			this.$store.dispatch('setModal', false);
		}
	}
};
</script>

<style src="../css/choosechat.css">

</style>
