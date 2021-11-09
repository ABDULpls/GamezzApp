<template>
<div class="useraction__wrapper" :style="{left:clientX + 'px', top:clientY +'px'}">
	<div class="useraction">
		<div  class="choosechat__name useraction__option useraction__pm">
			Личное Сообщение
		</div>
		<div class="choosechat__name useraction__option useraction__profile">
			Посмотреть профиль
		</div>
		<div class="choosechat__name useraction__option useraction__add">
			Добавить в друзья
		</div>
		<div class="choosechat__name useraction__option useraction__hide">
			Скрыть сообщения
		</div>
		<div class="choosechat__name useraction__option useraction__option-red useraction__block">
			Заблокировать пользователя
		</div>

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
