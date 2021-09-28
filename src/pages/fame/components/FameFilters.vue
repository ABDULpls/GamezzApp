<template>
    <checkable-list :items="gamesList" :active-index="activeIndex">
        <template v-slot="{items, currentItemIndex, selectItem}">
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
    </checkable-list>
</template>

<script>
import CheckableList from '../../../components/ui/CheckableList.vue';
export default {
    name: 'FameFilters',
    components: {
        CheckableList,
    },
    props: {
        activeIndex: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            gamesList: [
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
};
</script>
