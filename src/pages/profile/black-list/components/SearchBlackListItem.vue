<template>
    <users-list-item :user="user">
        <template v-slot="{user, addUser, removeUser, statusClasses}">
            <div class="blacklist__item">
                <img
                    class="blacklist__img"
                    :src="user.avatar"
                    width="44"
                    height="44"
                    alt="player"
                >
                <span class="blacklist__name">{{ user.name }}</span>
<!--                <button
                    v-if="user.isBlocked"
                    class="btn btn-remove friends__icon"
                    @click="removeUser(user)"
                ></button>-->
                <img
                    v-if="user.isBlocked"
                    src="../../../../assets/images/sprite.svg#blacklist-remove"
                    alt="remove"
                    class="blacklist__remove"
                    @click="removeUser(user)"
                    width="21"
                    height="21"
                >
                <img
                    v-else
                    src="../../../../assets/images/sprite.svg#blacklist-add"
                    alt="add"
                    class="blacklist__add"
                    width="17"
                    height="16"
                    @click="addUser(user)"
                >
<!--                <button
                    v-else
                    class="btn btn-plus friends__icon"
                    @click="addUser(user)"
                ></button>-->
            </div>
        </template>
    </users-list-item>
</template>
<script>
import UsersListItem from '../../../../components/UsersList/UsersListItem.vue';

export default {
    name: 'SearchBlackListItem',
    components: {
        UsersListItem,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },

        position: {
            type: Number,
            default: 1,
        }
    },

    computed: {
        itemClasses() {
            return {
                'noborder': this.position === 1,
            };
        }
    }
};
</script>