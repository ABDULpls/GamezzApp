<template>
    <overlay-scrollbars class="os-host-scroll-x" @init="onInitOverlayScrollbars">
        <div
            v-for="(item, idx) in items"
            class="os-host-scroll-x__item"
            :class="{'os-host-scroll-x__item_active': currentItemIndex === idx}"
            :key="item.path"
            @click="selectItem(idx)"
        >
            {{ item.label }}
        </div>
    </overlay-scrollbars>
</template>

<script>
import OverlayScrollbars from '../../../components/overlay-scrollbars/OverlayScrollbars.vue';

export default {
    name: 'ScrollMenu',
    components: {
        OverlayScrollbars,
    },
    emits: {
        'select-item': null,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },

        activeIndex: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            currentItemIndex: this.activeIndex,
        }
    },
    computed: {},
    methods: {
        selectItem(index) {
            this.currentItemIndex = index;
        },

        onInitOverlayScrollbars(instance) {
            this.scrollbar = instance;
        },

        autoScroll() {
            const children = this.scrollbar.getElements().content.children;

            this.scrollbar.scroll({
                el: children[this.currentItemIndex],
                block: 'center',
            }, 500);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.autoScroll();
        });
    },
    watch: {
        currentItemIndex(current) {
            this.$emit('select-item', current);

            this.$nextTick(() => {
                this.autoScroll();
            });
        }
    }
};
</script>