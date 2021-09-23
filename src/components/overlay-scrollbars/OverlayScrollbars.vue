<script>
import {defineComponent, h} from 'vue';
import OverlayScrollbars from 'overlayscrollbars/js/OverlayScrollbars';

export default defineComponent({
    name: 'OverlayScrollbars',

    data() {
        return {
            //instance: null,
        };
    },

    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },

    mounted() {
        const options = {
            className: 'os-theme-light',
        }

        this.instance = OverlayScrollbars(this.$el, Object.assign(options, this.options));
        this.$emit('init', this.instance);
    },

    beforeDestroy() {
        this.$emit('destroy', this.instance);
        this.instance.destroy();
        this.instance = null;
    },

    render() {
        return h('div', this.$slots.default());
    },
});
</script>
<style src="./overlay-scrollbars.min.css"></style>
<style src="./overlay-scrollbars-extend.css"></style>
