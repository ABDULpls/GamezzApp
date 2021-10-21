<template>
	<click-outside  :handler="close">
		<div @click.stop="toggle" :class="selectClass" class="select">
			<div class="select__label">{{ value }}</div>
			<div :class="dropDownClass" class="select__dropdown">
				<div
					@click="select(option)"
					v-for="option in options"
					:class="{'select__option--active': option===value }"
					class="select__option ">
					{{ option }}
				</div>
			</div>
		</div>
	</click-outside>
</template>

<script>
import ClickOutside from "../../ClickOutside.vue";

export default {
	name: "BaseSelect",
	components: {
		ClickOutside
	},
	props: {
		options: {
			type: [Array, Object],
			required: true,
		},
		value: null,
	},
	emits: {
		'update:value': null,
	},
	data() {
		return {
			isActive: false,
			current: this.value,

		};
	},
	methods: {
		select(option) {
			this.$emit('update:value', option);
		},
		open() {
			this.isActive = true;
		},
		close() {
			this.isActive = false;
		},
		toggle() {
			this.isActive = !this.isActive;
		}
	},
	computed: {
		selectClass() {
			return {'select--active': this.isActive};
		},
		dropDownClass() {
			return {'select__dropdown--active': this.isActive};
		}
	},
	watch: {
		value() {
			this.current = this.value;
		}
	}
};
</script>

<style src="./select.css">

</style>
