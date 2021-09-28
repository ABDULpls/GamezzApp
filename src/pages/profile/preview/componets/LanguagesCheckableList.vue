<template>
    <checkable-list :items="languagesList" :active-index="activeIndex" @update:item="onUpdateItem">
        <template v-slot="{items, currentItemIndex, selectItem}">
            <div class="list">
                <div class="list__item" v-for="(item, idx) in items" :key="item.code" @click="selectItem(idx)">
                    <img
                        class="list__flag"
                        :src="'/src/assets/images/lang.svg#' + item.code"
                        alt="flag"
                        width="22"
                        height="22"
                    >
                    <span :class="currentItemIndex === idx ? 'text-gradient list-active' : ''">
                        {{item.label}}
                    </span>
                </div>
            </div>
        </template>
    </checkable-list>
</template>

<script>
import CheckableList from '../../../../components/ui/CheckableList.vue';
export default {
    name: 'LanguagesCheckableList',
    components: {
        CheckableList,
    },
    emits: {
        'update:item': null,
    },
    props: {
        languagesList: {
            type: Array,
            default: () => [],
        },

        activeIndex: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        onUpdateItem(value) {
            this.$emit('update:item', value);
        }
    }
};
</script>