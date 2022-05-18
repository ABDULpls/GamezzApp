<template>
    <div style="position: relative">

        <transition-group name="fade-slide" duration="500">
            <room-list-item :me="me" :game="game" :room="room" v-for="room in rooms" :key="room.id"
                            @enterRoom="openRoom" class="player"/>
        </transition-group>
            <locked-room-screen-slider  :me="me" :game="game" :room="selectedRoom"
                                       v-model:is-open="lockedRoomScreen"/>
        <room-screen-slider  :room="selectedRoom" :game="game" :me="me"
                            v-model:is-open="openRoomScreen"/>
    </div>

</template>

<script>
    import RoomListItem from "./RoomListItem.vue";
    import LockedRoomScreenSlider from "./LockedRoomScreenSlider.vue";
    import RoomScreenSlider from "./RoomScreenSlider.vue";
    import {mapState} from "vuex";

    export default {
        name: "RoomList",
        components: {RoomListItem, LockedRoomScreenSlider, RoomScreenSlider},
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
        },
        data() {
            return {
                lockedRoomScreen: false,
                openRoomScreen: false,
                selectedRoom: {}
            }
        },
        computed: {
            ...mapState({
                modalIsOpen: state => state.modalIsOpen
            }),
        },
        methods: {
            openRoom(room) {
                this.selectedRoom = room
                if (room.locked) {
                    this.lockedRoomScreen = true

                } else {
                    this.openRoomScreen = true

                }
                console.log(room)
            },
            openLockedRoom(room) {
                this.selectedRoom = room
                this.lockedRoomScreen = true
            }
        },
        watch: {
            modalIsOpen(state, prevState) {
                if (state === false && prevState === true) {
                    this.openRoomScreen = false;
                    this.lockedRoomScreen = false;
                }
            },
            openRoomScreen() {
                this.$store.dispatch('setModal', this.openRoomScreen);
                if (this.openRoomScreen)
                    document.querySelector('body').style.overflowY = 'hidden';
                else
                    document.querySelector('body').style.overflowY = 'auto';
            },
            lockedRoomScreen() {
                console.log(this.lockedRoomScreen)
                this.$store.dispatch('setModal', this.lockedRoomScreen);
                if (this.lockedRoomScreen)
                    document.querySelector('body').style.overflowY = 'hidden';
                else
                    document.querySelector('body').style.overflowY = 'auto';
            },
        }
    };
</script>

<style>
    .fade-slide-leave-active {
        position: absolute;
    }
</style>
