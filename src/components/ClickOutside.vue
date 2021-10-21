<script>
export default {
	name: 'ClickOutside',
	props: {
		handler: {
			type: Function,
			required: true,
		}
	},
	mounted() {
		document.addEventListener('click', this.listener);
	},
	unmounted() {
		document.removeEventListener('click', this.listener);
	},
	methods: {
		listener(e) {
			e.preventDefault();
			if (e.target === this.$el || this.$el.contains(e.target)) {
				return;
			}
			if (this.$router.currentRoute.value.name === 'GamePage') {

				if (e.target.className === 'overlay' && e.target.children[0].className === 'modal') {
					this.handler();
				} else return;
			}


			this.handler();
		}
	},
	render() {
		return this.$slots.default();
	}
};
</script>
