<script>
import {h} from 'vue';

export default {
    name: 'CssSpinner',
    props: {
        size: {
            type: String,
            default: '',
        }
    },
    render() {
        const sizeClass = ' size-' + this.size;
        return h('div', {
            class: 'lds-dual-ring' + sizeClass,
        }, []);
    },
};
</script>

<style src="./css-spinner.css"></style>