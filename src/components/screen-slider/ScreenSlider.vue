<template>
    <teleport to="body">
        <transition appear name="slide-right">
            <div v-show="isOpen" class="slide-page">
                <slot name="header" :close="close"></slot>
                <slot name="content"></slot>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
    name: 'ScreenSlider',
    emits: {
        'update:is-open': null,
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
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

<style src="./screen-slider.css"></style>