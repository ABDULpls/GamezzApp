<template>
    <div class="topbar">
				<span class="topbar__title topbar__left">Чат:&nbsp;
		<click-outside :handler="closeChatSelect">
      			<span @click.stop="toggleChatSelect"
                      class="topbar__title text-gradient chat-mode">
					Общий
				</span>
				<transition appear name="scale-down" duration="500">
					<chat-select
                            v-if="chatSelectScreen"
                            :chat="chat"
                            :me="me">
                    </chat-select>
				</transition>
		</click-outside>
			</span>
        <user-widget :user="me"/>
        <button @click="$router.back()" class="btn btn-close"></button>
    </div>

    <div class="useraction__dropdown-wrapper">
        <click-outside :handler="closeUserDropdown">
            <transition appear name="scale-down" duration="300">

                <user-action-dropdown v-if="userDropdown" :clientX="userDropdownX" :clientY="userDropdownY"
                                      :user="userDropdownUser"/>
            </transition>
        </click-outside>
    </div>

    <div class="gamechat">
        <div ref="chat" :key="index" v-for="(message, index) in chat.messages" class="gamechat__row">

            <div class="gamechat__card rus">
                <img class="gamechat__img"
                     src="https://cdn.gamezz.io/avatars/k/a/1209_64x64.jpg"
                     alt="player" width="35" height="35"
                >
            </div>
            <div class="gamechat__name-container">

			<span
                    class="gamechat__name"
                    data="private-chat"
            >
				{{ message.user.name }}

			</span>
                <div @click.stop.prevent="openUserDropdown($event,message)"
                     :class="{'gamechat-options': message.user.id !== 1}"></div>
            </div>
            <time class="gamechat__time">
                {{ message.date + ' ' + message.time }}
            </time>
            <span
                    :class=" myMessage(message) "
                    class="gamechat__msg">
				{{ message.message }}
			</span>
        </div>
    </div>

    <!--	<div class="gamechat__row">
            <div class="gamechat__card rus">
                <img class="gamechat__img" src="https://cdn.gamezz.io/avatars/d/s/32719_180x180.png" alt="player" width="35.61"
                     height="35.61">
            </div>
            <span class="gamechat__name">Narntt</span>
            <time class="gamechat__time">12.01 16.40</time>
            <span class="gamechat__msg gamechat__mymsg">Привет</span>
        </div>-->
    <form autocomplete="off" class="gamechat__textmsg">
        <input class="gamechat__input" type="text" autocomplete="off" placeholder="Сообщение">
        <button @click.prevent.stop="sendMessage">
            <img src="../../assets/images/sprite.svg#textbtn" alt="send" class="textbtn">
        </button>
    </form>
</template>

<script>
    import UserWidget from "../../components/ui/UserWidget.vue";
    import ScreenSlider from "../../components/screen-slider/ScreenSlider.vue";
    import ChatSelect from "./components/ChatSelect.vue";
    import ClickOutside from "../../components/ClickOutside.vue";
    import chatApi from "../../api/chat.api";
    import {mapState} from "vuex";
    import UserActionDropdown from "./components/UserActionDropdown.vue";

    export default {
        name: "ChatGlobal",
        components: {
            UserActionDropdown,
            UserWidget,
            ScreenSlider,
            ChatSelect,
            ClickOutside
        },
        emits: {
            'update:is-open': null,
        },
        computed: {
            ...mapState({
                me: state => state.auth.user
            }),
            myMessage(message) {
                return (message) => ({'gamechat__mymsg': message.user.id === 1});
            }
        },

        props: {
            isOpen: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                chatSelectScreen: false,
                chat: {},
                userDropdown: false,
                userDropdownX: 0,
                userDropdownY: 0,
                userDropdownUser: null
            };
        },
        created() {
            this.fetchChat();
        },
        mounted() {
            setTimeout(() => {
                this.$refs.chat.children[this.$refs.chat.childElementCount - 1].scrollIntoView();

            }, 0);
        },
        methods: {

            scrollDown() {
                this.$nextTick(() => {
                    this.$refs.chat.children[this.$refs.chat.childElementCount - 1].scrollIntoView();
                });
            },
            openUserDropdown(e, message) {
                this.userDropdown = true;
                this.userDropdownX = e.pageX - 40
                this.userDropdownY = e.pageY
                this.userDropdownUser = message.user;
                if (!this.userDropdownX || !this.userDropdownY)
                    this.userDropdown = false;
            },
            sendMessage() {
                this.chat.messages.push({
                    message: this.value,
                    //me
                    user: {
                        id: 1,
                        name: 'Biba'
                    },
                    date: new Date().toLocaleDateString("ru-RU"),
                    time: new Date().toLocaleTimeString("ru-RU"),
                });
                this.value = '';
                this.scrollDown();
            },
            onUpdateIsOpen(value) {
                this.$emit('update:is-open', value);
            },
            toggleChatSelect() {
                this.chatSelectScreen = !this.chatSelectScreen;
            },
            closeChatSelect() {
                this.chatSelectScreen = false;
                console.log('close chatselect');

            },
            closeUserDropdown() {
                console.log('close userropdown');
                this.userDropdown = false;
            },
            async fetchChat() {
                try {
                    const response = await chatApi.fetchChat();
                    this.chat = response.data;
                } catch (err) {
                    console.log(err);
                }
            },
        },
        watch: {
            isOpen() {
                // const chat = document.querySelector('.gamechat');
                // chat.scrollTop = chat.clientHeight;
                // let scrollHeight = this.$refs.chat.scrollHeight;
                // window.scrollTo(0, scrollHeight);
            }
        }
    };
</script>

<style src="./css/gamechat.css">

</style>
