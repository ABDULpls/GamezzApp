<template>
    <screen-slider :is-open="isOpen" @update:is-open="onUpdateIsOpen">
        <template #header="{close}">
            <div class="topbar">
              <button class="btn btn-back topbar__left" @click="close"></button>
                <span class="topbar__title topbar__left">Выбрать язык</span>
            </div>
        </template>
        <template #content>
            <languages-checkable-list
                :languages-list="languagesList"
                @update:item="onUpdateItem"
            />
        </template>
    </screen-slider>
</template>

<script>
import ScreenSlider from '../../../../components/screen-slider/ScreenSlider.vue';
import LanguagesCheckableList from './LanguagesCheckableList.vue';

export default {
    name: 'LanguagesScreenSlider',
    components: {
        ScreenSlider,
        LanguagesCheckableList,
    },
    emits: {
        'update:is-open': null,
        'update:language': null,
    },
    props: {
        languagesList: {
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
            this.$emit('update:language', value);
        }
    }
};
</script>
