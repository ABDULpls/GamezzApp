<template>
	<teleport to="body">
		<transition name="fade" appear>
			<div class="overlay" v-if="isOpen">
				<click-outside :handler="close">
					<div class="modal">
						<button class="btn btn-close modal__close" @click.self.prevent.stop="close"></button>
						<span class="modal__title">
                        <slot name="title">Оцените игру</slot>
                    </span>
						<slot name="body"></slot>
					</div>
				</click-outside>
			</div>
		</transition>
	</teleport>
</template>

<script>
import ClickOutside from "../ClickOutside.vue";

export default {
	name: 'ModalDialog',
	components: {
		ClickOutside
	},
	emits: {
		'update:is-open': null
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		open() {
			this.$emit('update:is-open', true);
			console.log('emit open');
		},
		close() {
			this.$nextTick();
			this.$emit('update:is-open', false);
			console.log('emit close');
		}
	}
};
</script>
<style src="./modal-dialog.css"></style>
