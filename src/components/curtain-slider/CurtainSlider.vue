<template>
    <teleport to="body">
        <transition appear name="slide-in-up">
            <div class="quiz__modal" v-show="isOpen">
                <slot name="title"></slot>
                <slot name="content"></slot>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
    name: 'CurtainSlider',
    emits: {
        'update:is-open': null,
    },
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
<style src="./curtain-slider.css"></style>
