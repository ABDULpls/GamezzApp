<template>
	<div>

		<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
			<template #header="{close}">
				<div class="topbar">
					<button @click="close" class="btn btn-back topbar__left"></button>
					<span class="topbar__title topbar__left">Редактировать профиль</span>
				</div>
			</template>
			<template #content>
				<div class="edit">
					<span class="edit__heading">Фото профиля</span>
					<div class="edit__photo">
						<img class="edit__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" width="82" height="82"
							 alt="photo">
						<div class="btn edit__load">
							<label class="edit__load  btn-border" for="avatar_upload"> Выбрать фото профиля</label>
							<input id="avatar_upload" type="file" accept=".png, .jpg, .jpeg" class=" file_input">

							<div class="edit__text">Ограничение фото:<br>300 x 300 px (.jpg, .png, .gif)</div>
						</div>
					</div>
					<span class="edit__heading">Контакты</span>
					<label class="edit__label">Логин:<input class="input" type="text" spellcheck="false" value="Narntt"></label>
					<label class="edit__label">E-mail:<input class="input" type="text" spellcheck="false"
															 value="narntt@gmail.com"></label>
					<label class="edit__label">Телефон:<input class="input" type="text" spellcheck="false"
															  value="+79113489381"></label>
					<label class="edit__label">Telegram:<input class="input" type="text" spellcheck="false"
															   value="narntt_telegram"></label>
					<label class="edit__label">Viber:<input class="input" type="text" spellcheck="false"
															placeholder="Ваш никнейм в Viber"></label>
					<label class="edit__label">WhatsApp:<input class="input" type="text" spellcheck="false"
															   placeholder="Ваш никнейм в WhatsApp"></label>
					<span class="edit__heading">Пароль</span>
					<div @click="openEditPasswordScreen" class="edit__password">
						<span>Изменить пароль</span>
						<span class="edit__text">Последний раз изменен 04.10.20</span>
						<img src="../../../assets/images/sprite.svg#arrow-left" alt="password" class="edit__password-icon" width="8"
							 height="14">
					</div>

					<profile-edit-password :me="me"
										   v-model:is-open="editPasswordScreen">
					</profile-edit-password>

					<span class="edit__heading">Дополнительно</span>
					<div class="edit__settings">
						<span>Разрешить принимать подарки от друзей</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
					<div class="edit__settings">
						<span>Запомнить мой ip адрес</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
					<div class="edit__settings noborder">
						<span>Приглашать меня в сообщества</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
					<span class="edit__heading">Уведомления</span>
					<div class="edit__settings">
						<span>Показывать текущее окно</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
					<div class="edit__settings">
						<span>Уведомлять меня о продаже лота</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
					<div class="edit__settings noborder">
						<span>Уведомлять меня о победе</span>
						<label class="switch">
							<input class="switch__checkbox" type="checkbox">
							<span class="switch__slider"></span>
						</label>
					</div>
				</div>
				<div class="edit__btns">
					<button @click="onUpdateIsOpen(false)" class="edit__cancel btn">Отмена</button>
					<button class="edit__save btn"><span class="text-gradient">Сохранить</span></button>
				</div>
			</template>
		</screen-slider>
	</div>

</template>

<script>
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";
import ProfileEditPassword from "./ProfileEditPassword.vue";
import {mapState} from "vuex";

export default {
	name: "ProfileEditScreenSlider",
	components: {
		ProfileEditPassword,
		ScreenSlider,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		openProfileEdit: Function
	},
	data() {
		return {
			editPasswordScreen: false
		};
	},
	computed: {
		...mapState({
			me: state => state.auth.user,
			modalIsOpen: state => state.modalIsOpen
		})
	},

	watch: {
		modalIsOpen() {
			if (!this.modalIsOpen) {
				if (this.editPasswordScreen && this.isOpen) {
					this.openProfileEdit();
					this.$store.dispatch('setModal', true);
				}
				this.editPasswordScreen = false;
			}
		}
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		closeEditPassword() {
			this.editPasswordScreen = false;

		},
		openEditPasswordScreen() {
			this.editPasswordScreen = true;
		}
	}
};
</script>

<style src="../css/edit.css">

</style>
