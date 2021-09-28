<template>
    <screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
        <template #header="{close}">
            <div class="topbar">
                <img
                    src="../../../assets/images/sprite.svg#arrow-left"
                    class="topbar__left"
                    alt="back"
                    width="10"
                    height="17"
                    @click="close"
                >
                <span class="topbar__title topbar__left">Выбрать рейтинг</span>
            </div>
        </template>
        <template #content>
            <fame-filters @update:item="onUpdateItem" />
        </template>
    </screen-slider>
</template>

<script>
import ScreenSlider from '../../../components/screen-slider/ScreenSlider.vue';
import FameFilters from './FameFilters.vue';

export default {
    name: 'LanguagesScreenSlider',
    components: {
        ScreenSlider,
        FameFilters,
    },
    emits: {
        'update:is-open': null,
        'update:filter': null,
    },
    props: {
        filtersList: {
            type: Array,
            default: () => [],
        },
        isOpen: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onUpdateIsOpen(value) {
            this.$emit('update:is-open', value);
        },
        onUpdateItem(value) {
            this.$emit('update:filter', value);
        }
    }
};
</script>
