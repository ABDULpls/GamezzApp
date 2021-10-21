<template>
    <users-list-item :user="user">
        <template v-slot="{user, addUser, removeUser, statusClasses}">
            <div class="friends__item" :class="itemClasses">
                <img
                    class="friends__img"
                    :src="user.avatar"
                    width="44"
                    height="44"
                    alt="player"
                >
                <span class="name friends__name">{{ user.name }}</span>
                <span class="friends__status" :class="statusClasses">{{ user.onlineStatus }}</span>
                <button
                    v-if="user.isFriend"
                    class="btn btn-remove friends__icon"
                    @click="removeUser(user)"
                ></button>
                <button
                    v-else
                    class="btn btn-plus friends__icon"
                    @click="addUser(user)"
                ></button>
            </div>
        </template>
    </users-list-item>
</template>
<script>
import UsersListItem from '../../../../components/UsersList/UsersListItem.vue';

export default {
    name: 'SearchUserListItem',
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