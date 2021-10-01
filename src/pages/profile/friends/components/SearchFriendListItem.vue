<template>
    <users-list-item :user="user">
        <template v-slot="{user, addUser, removeUser, statusClasses}">
            <div class="friends__item noborder">
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
                    v-if="user.isFriend"
                    src="../../../../assets/images/sprite.svg#friend-remove"
                    alt="delete"
                    width="10"
                    height="10"
                    class="friends__icon friends__delete"
                    @click="removeUser(user)"
                >
                <img
                    v-else
                    src="../../../../assets/images/sprite.svg#friend-add"
                    alt="add"
                    width="13"
                    height="13"
                    class="friends__icon friends__add"
                    @click="addUser(user)"
                >

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
        }
    },
};
</script>