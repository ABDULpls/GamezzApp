<template>
<div class="useraction__wrapper" :style="{left:clientX + 'px', top:clientY +'px'}">
	<div class="useraction">
		<button  class="choosechat__name useraction__option useraction__pm">
			Личное Сообщение
		</button>
		<button class="choosechat__name useraction__option useraction__profile">
			Посмотреть профиль
		</button>
		<button class="choosechat__name useraction__option useraction__add">
			Добавить в друзья
		</button>
		<button class="choosechat__name useraction__option useraction__hide">
			Скрыть сообщения
		</button>
		<button class="choosechat__name useraction__option useraction__option-red useraction__block">
			Заблокировать пользователя
		</button>

	</div>
</div>
</template>

<script>
export default {
	name: "UserActionDropdown",
	props: {
		clientX: {
			type:Number,
			default: 0,
		},
		clientY: {
			type: Number,
			default: 0,
		},
		user: Object,
	},
	data() {
		return {
		}
	},
	methods: {

	}
};
</script>

<style scoped>

</style>
