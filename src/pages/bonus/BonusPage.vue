<template>
	<div class="bonus">
		<h3 class="bonus__heading">Награда за лояльность</h3>
		<div class="bonus__icon"><span>50</span></div>
		<span class="bonus__day">День 1</span>
		<button @click="$router.go(-1)" class="bonus__btn btn border-gradient">Забрать награду</button>
		<p class="bonus__text">
			Получайте награду за ежедневное посещение, собирайте бонусы, и получите особую награду
			в конце недели
		</p>
	</div>
</template>

<script>
export default {
	name: "BonusPage",
	data(){
		return{

		}
	},

};
</script>

<style src="./bonus.css">

</style>
