<template>
    <teleport to="body">
        <transition name="modal" appear>
            <div class="overlay" v-if="isOpen">
                <div class="modal">
                  <button class="btn btn-close modal__close" @click="close"></button>
                    <span class="modal__title">
                        <slot name="title">Оцените игру Дурак простой</slot>
                    </span>
                    <slot name="body"></slot>
                    <slot name="footer" :close="close">
                        <button class="btn modal__button btn-orange">Оценить</button>
                    </slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
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
};
</script>
<style src="./modal-dialog.css"></style>
