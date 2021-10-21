<script>
import {h} from 'vue';

const allowTags = ['a', 'button', 'span', 'div'];
const defaultTag = 'button';

export default {
    name: 'BaseButton',
    props: {
        tag: {
            type: String,
            default: defaultTag,
        }
    },
    render() {
        const tag = allowTags.includes(this.tag) ? this.tag : defaultTag;

        return h(tag, {}, this.$slots);
    }
};
</script>