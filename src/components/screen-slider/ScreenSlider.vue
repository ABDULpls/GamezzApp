<template>
    <teleport to="body">
        <transition appear :name="transitionName">
            <div v-show="isOpen" class="slide-page">
                <slot name="header" :close="close" ></slot>
                <slot    name="content"></slot>
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
		transitionName: {
        	type: String,
			default: 'slide-right'
		}
    },
    methods: {
        open() {
            this.$emit('update:is-open', true);
			console.log('SLDIEIR OPEN');
		},

        close() {
            this.$emit('update:is-open', false);
			console.log('SLDIEIR close');
        },
    }
};
</script>

<style src="./screen-slider.css"></style>
