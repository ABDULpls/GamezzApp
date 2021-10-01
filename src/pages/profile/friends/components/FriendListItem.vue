<template>
    <users-list-item :user="friend">
        <template v-slot="{user, removeUser, statusClasses}">
            <div class="friends__item">
                <img
                    class="friends__img"
                    :src="user.avatar"
                    width="44"
                    height="44"
                    alt="player"
                >
                <span class="friends__name">{{ user.name }}</span>
                <span class="friends__status" :class="statusClasses">{{ user.onlineStatus }}</span>
                <img
                    src="../../../../assets/images/sprite.svg#friend-delete"
                    alt="delete"
                    width="10"
                    height="10"
                    class="friends__icon friends__delete"
                    @click="removeUser(user)"
                >
            </div>
        </template>
    </users-list-item>
</template>

<script>
import UsersListItem from '../../../../components/UsersList/UsersListItem.vue';
export default {
    name: 'FriendListItem',
    components: {
        UsersListItem,
    },
    props: {
        friend: {
            type: Object,
            required: true,
        }
    },
};
</script>
