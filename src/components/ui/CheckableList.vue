<script>
export default {
    name: 'CheckableList',
    emits: {
        'update:item': null,
    },
    props: {
        activeIndex: {
            type: Number,
            default: 0,
        },
        items: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            currentItemIndex: this.activeIndex,
        }
    },
    methods: {
        selectItem(index) {
            this.currentItemIndex = index;
            this.$emit('update:item', this.items[this.currentItemIndex]);
        }
    },
    render() {
        return this.$slots.default({
            items: this.items,
            selectItem: this.selectItem,
            currentItemIndex: this.currentItemIndex,
        });
    }
};
</script>
<style src="../../assets/css/list.css"></style>