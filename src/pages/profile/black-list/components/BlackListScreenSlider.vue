<template>
    <screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
        <template #header="{close}">
            <div class="blacklist__search">
                <input
                    type="text"
                    class="blacklist__input"
                    id="friends-input"
                    v-model="username"
                    placeholder="Введите имя пользователя"
                    :readonly="isReadonly"
                    ref="search"
                >
                <label class="blacklist__label" for="friends-input"></label>
                <button class="btn" @click="close">Назад</button>
            </div>
        </template>
        <template #content>
            <div class="blacklist">
                <transition-group name="fade-slide" duration="500">
                    <search-friend-list-item
                        v-for="(user, idx) in filteredUserList"
                        :key="user.id"
                        :user="user"
                        :position="idx + 1"
                        @add:user="onAddUser"
                        @remove:user="onRemoveUser"
                    />
                </transition-group>
            </div>
        </template>
    </screen-slider>
</template>

<script>
import ScreenSlider from '../../../../components/screen-slider/ScreenSlider.vue';
import SearchFriendListItem from './SearchBlackListItem.vue';

export default {
    name: 'BlackListScreenSlider',
    components: {
        ScreenSlider,
        SearchFriendListItem,
    },
    emits: {
        'update:is-open': null,
        'add:user': null,
        'remove:user': null,
    },
    props: {
        usersList: {
            type: Array,
            default: () => [],
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            username: '',
            isReadonly: true,
        };
    },
    computed: {
        filteredUserList() {
            if (!this.username) {
                return this.usersList;
            }

            const regex = new RegExp(`${this.username}`, 'i');
            return this.usersList.filter(user => regex.test(user.name));
        }
    },
    methods: {
        onUpdateIsOpen(value) {
            this.$emit('update:is-open', value);
        },
        onAddUser(user) {
            this.$emit('add:user', user);
        },
        onRemoveUser(user) {
            this.$emit('remove:user', user);
        }
    },
    watch: {
        isOpen() {
            if (this.isOpen) {
                this.username = '';
                this.isReadonly = true;

                this.$nextTick(() => {
                    this.isReadonly = false;
                    this.$refs.search.focus();
                });
            }
        },
    },
};
</script>