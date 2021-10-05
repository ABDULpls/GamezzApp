<script>
import {h} from 'vue';
export default {
    name: 'UsersListItem',
    emits: {
        'add:user': null,
        'remove:user': null,
    },
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    render() {
        return h('div', this.$slots.default({
            user: this.user,
            addUser: this.addUser,
            removeUser: this.removeUser,
            statusClasses: this.statusClasses,
        }));
    },
    computed: {
        statusClasses() {
            return {
                'friends__status-online': this.user.isOnline,
            };
        },
    },
    methods: {
        addUser(user) {
            this.$emit('add:user', user);
        },
        removeUser(user) {
            this.$emit('remove:user', user);
        }
    }
};
</script>
