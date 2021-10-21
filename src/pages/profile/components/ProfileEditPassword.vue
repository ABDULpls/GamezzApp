<template>
	<screen-slider transition-name="fade" :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">

			<div class="topbar">
				<button @click="close" class="btn btn-back topbar__left"></button>
				<span class="topbar__title topbar__left">Изменить пароль</span>
			</div>
		</template>
		<template #content>
			<div class="edit">
				<form>

					<label class="edit__label">
						Текущий пароль:
						<input
							@input="currentPasswordInput"
							autocomplete="current-password"
							class="input"
							type="password"
							spellcheck="false"
							:value="currentPassword">
					</label>
					<label class="edit__label">
						Новый пароль:
						<input
							@input="newPasswordInput"
							autocomplete="new-password"
							class="input"
							type="password"
							spellcheck="false"
							:value="newPassword">
					</label>
					<span class="edit__check edit__check-active">Минимум 6 символов</span>
					<span class="edit__check">Состоит из чисел и букв</span>
					<label class="edit__label">
						Повторите пароль:
						<input @input="newPasswordRepeatInput"
							   autocomplete="new-password"
							   class="input"
							   type="password"
							   spellcheck="false"
							   :value="newPasswordRepeat">
					</label>
				</form>
			</div>
			<div class="edit__btns">
				<button @click="closeEditPassword" class="edit__cancel btn">Отмена</button>
				<button class="edit__save btn"><span class="text-gradient">Сохранить</span></button>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import {mapState} from "vuex";

export default {
	name: "ProfileEditPassword",
	components: {
		ScreenSlider
	},
	props: {
		me: {
			type: Object,
			default: () => ({})
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
		closeEditPassword: Function
	},
	data() {
		return {
			currentPassword: '',
			newPassword: '',
			newPasswordRepeat: '',
		};
	},
	computed: {
		...mapState({
			modalIsOpen: state => state.modalIsOpen
		})
	},
	watch: {
		modalIsOpen() {
			if (!this.modalIsOpen) {

			}
		}
	},

	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		currentPasswordInput(e) {
			this.currentPassword = e.target.value;
		},
		newPasswordInput(e) {
			this.newPassword = e.target.value;
		},
		newPasswordRepeatInput(e) {
			this.newPasswordRepeat = e.target.value;
		}

	},
};
</script>

<style src="../css/edit.css">

</style>
