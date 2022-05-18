<template>
	<screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
		<template #header="{close}">
			<div class="topbar">
				<h1 class="topbar__title topbar__left">Войти в игру</h1>
				<button @click="close" class="btn btn-close"></button>
			</div>
		</template>
		<template #content>
			<div v-if="isOpen" class="form password">
				<h2 class="password__header">
					{{ game.name }}
				</h2>
				<h3 class="password__description">
					Администратор игры установил вход по паролю
				</h3>
				<form>
					<label class="input__label input-password">
						<input v-model="password" type="text" class="input" placeholder="Пароль для входа">
					</label>
					<button type="submit" class="btn btn-orange password__btn" @click="checkPassword">Войти</button>
				</form>
			</div>
		</template>
	</screen-slider>
</template>

<script>
import UserWidget from "../../../components/ui/UserWidget.vue";
import ScreenSlider from "../../../components/screen-slider/ScreenSlider.vue";

export default {
	name: "LockedRoomScreenSlider",
	components: {
		UserWidget,
		ScreenSlider
	},
	emits: {
		'update:is-open': null,
	},
	data() {
		return {
			password: '',
		};
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
		game: {
			type: Object,
			required: true,
		},
		room: {
			type: Object ,
			required: true
		}
	},
	methods: {
		onUpdateIsOpen(value) {
			this.$emit('update:is-open', value);
		},
		checkPassword(e) {
			if (this.password === this.room.password) {
				this.onUpdateIsOpen(false)

				this.room.players.push(this.me);
				this.$nextTick(() => {
					this.$router.push({
						name: 'GameLobbyPage',
						params: {
							meString: JSON.stringify(this.me),
							gameString: JSON.stringify(this.game),
							roomString: JSON.stringify(this.room)
						}
					});

				});
			}
		}
	}
};
</script>

<style src="../../forgot-password/css/forgot-password.css">

</style>
