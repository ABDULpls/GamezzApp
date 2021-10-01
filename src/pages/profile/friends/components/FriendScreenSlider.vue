<template>
    <screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
        <template #header="{close}">
            <div class="topbar__search">
                <label class="input__label input-search">
                  <input
                      type="text"
                      class="input"
                      v-model="friendName"
                      placeholder="Введите имя друга"
                      ref="search"
                  >
                </label>
                <button class="btn" @click="close">Отмена</button>
            </div>
        </template>
        <template #content>
            <div class="friends">
                <transition-group name="fade-slide" duration="500">
                    <search-friend-list-item
                        v-for="user in filteredUserList"
                        :key="user.id"
                        :user="user"
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
import SearchFriendListItem from './SearchFriendListItem.vue';

export default {
    name: 'FriendScreenSlider',
    components: {
        ScreenSlider,
        SearchFriendListItem,
    },
    emits: {
        'update:is-open': null,
        'update:filter': null,
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
            friendName: '',
        };
    },
    computed: {
        filteredUserList() {
            if (!this.friendName) {
                return this.usersList;
            }

            const regex = new RegExp(`${this.friendName}`, 'i');
            return this.usersList.filter(user => regex.test(user.name));
        }
    },
    methods: {
        onUpdateIsOpen(value) {
            this.$emit('update:is-open', value);
        },
        onUpdateItem(value) {
            this.$emit('update:filter', value);
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
                this.friendName = '';
                this.$nextTick(() => {
                    this.$refs.search.focus();
                });
            }
        },
    },
};
</script>