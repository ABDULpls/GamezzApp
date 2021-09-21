<template>
    <transition appear name="slide-right">
        <div v-if="isOpen" class="slide-page">
            <div class="topbar topbar-dark">
                <img
                    src="../assets/images/sprite.svg#arrow-left"
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
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ScreenSlider',
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

<style>
.slide-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 7%;
    background: #10152b;
}

.slide-right-enter-active,
.slide-right-leave-active {
    transition: left 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
    left: -100%;
}

.slide-right-enter-to,
.slide-right-leave-from {
    left: 0;
}
</style>