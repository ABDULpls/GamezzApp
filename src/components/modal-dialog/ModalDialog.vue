<template>
    <transition name="modal" appear>
        <div class="overlay" v-if="isOpen">
            <div class="modal">
                <img src="../../assets/images/sprite.svg#close" width="17" height="17" alt="close" class="modal__close" @click="close">
                <span class="modal__title">
                    <slot name="title">Оцените игру Дурак простой</slot>
                </span>
                <slot name="body"></slot>
                <slot name="footer" :close="close">
                    <button class="modal__button btn btn-orange">Оценить</button>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ModalDialog',
    emits: {
        'update:is-open': null
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {}
    },

    methods: {
        open() {
            this.$emit('update:is-open', true);
        },
        close() {
            this.$emit('update:is-open', false);
        }
    }
});
</script>
<style src="./modal-dialog.css"></style>
<style>
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.85);
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
