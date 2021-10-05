<template>
    <users-list-item :user="user">
        <template v-slot="{user, removeUser, statusClasses}">
            <div class="blacklist__item">
                <img
                    class="blacklist__img"
                    :src="user.avatar"
                    width="44"
                    height="44"
                    alt="player"
                >
                <span class="blacklist__name">{{ user.name }}</span>
                <img
                    src="../../../../assets/images/sprite.svg#blacklist-remove"
                    alt="remove"
                    class="blacklist__remove"
                    @click="removeUser(user)"
                    width="21"
                    height="21"
                >
<!--                <button class="btn btn-delete" @click="removeUser(user)"></button>-->
            </div>
        </template>
    </users-list-item>
</template>

<script>
import UsersListItem from '../../../../components/UsersList/UsersListItem.vue';
export default {
    name: 'BlackListItem',
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
