<template>

	<div class="room__chat">
		<router-link tag="button" :to="{name:'ChatGlobal'}">
			<img src="../../../assets/images/sprite.svg#chat-icon" alt="chat" class="room__chat-icon" width="21" height="22">
			<div class="chat__row">
				<time class="chat__time">16:18</time>
				<span class="chat__user">Sinderella:</span>
				<span class="chat__message">Всем привет</span>
			</div>
			<div class="chat__row">
				<time class="chat__time">16:15</time>
				<span class="chat__user">InKey:</span>
				<span class="chat__message">Всем удачи и хорошей игры</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import GeneralChat from "../../../pages/chat/components/GameChat.vue";

export default {
	name: "ChatPreview",
	components: {
		GeneralChat
	},

};
</script>

<style src="./chatcollapse.css">

</style>
