<template>
	<div style="position: relative">

	<transition-group name="fade-slide" duration="500" >
		<room-list-item :me="me" :game="game" :room="room" v-for="room in rooms" :key="room.id" class="player"/>
	</transition-group>
	</div>

</template>

<script>
import RoomListItem from "./RoomListItem.vue";

export default {
	name: "RoomList",
	components: {RoomListItem},
	props: {
		rooms: {
			type: Array,
			default: () => [],
		},
		me: {
			type: Object,
			required: true,
		},
		game: {
			type: Object,
			required: true,
		}
	}
};
</script>

<style>
.fade-slide-leave-active {
	position: absolute;
}
</style>
