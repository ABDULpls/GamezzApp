<template>
    <teleport to="body">
        <transition appear name="slide-right">
            <div v-show="isOpen" class="slide-page">
                <div class="topbar">
                    <img
                        src="../../assets/images/sprite.svg#arrow-left"
                        class="topbar__left"
                        alt="back"
                        width="10"
                        height="17"
                        @click="close"
                    >
                    <span class="topbar__title topbar__left">
                        <slot name="title" />
                    </span>
                </div>
                <slot />
            </div>
        </transition>
    </teleport>
</template>

<script>

export default {
    name: 'ScreenSlider',
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
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

<style src="./screen-slider.css"></style>