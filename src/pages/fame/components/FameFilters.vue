<template>
    <div class="list">
        <span
            v-for="(item, idx) in items" :key="item.slug"
            class="list__item"
            :class="currentItemIndex === idx ? 'text-gradient list-active' : ''"
            @click="selectItem(idx)"
        >
            {{ item.label }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'FameFilters',
    props: {
        activeIndex: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            currentItemIndex: this.activeIndex,
            items: [
                {
                    label: 'Общий рейтинг',
                    slug: 'all',
                },
                {
                    label: 'Сапер',
                    slug: 'minesweeper',
                },
                {
                    label: 'Пасьянс Косынка',
                    slug: 'minesweeper',
                },
                {
                    label: 'Тетрис',
                    slug: 'minesweeper',
                },
                {
                    label: 'Паук 1 масть',
                    slug: 'minesweeper',
                },
                {
                    label: 'Найди слова',
                    slug: 'minesweeper',
                },
            ]
        }
    },
    methods: {
        selectItem(index) {
            this.currentItemIndex = index;
            this.$emit('update:item', this.items[this.currentItemIndex]);
        }
    }
};
</script>
