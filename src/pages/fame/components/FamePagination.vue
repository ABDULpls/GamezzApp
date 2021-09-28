<template>
    <custom-pagination :max-items="maxItems" :page="currentPage" :per-page="perPage">
        <template v-slot="{go, next, prev, links, currentPage}">
            <div>
                <div class="fame__btns">
                    <span
                        v-for="link in links"
                        :key="link.page"
                        :class="{'fame__btn-active': link.page === currentPage}"
                        @click="go(link.page)"
                        class="fame__btn"
                    >{{ link.label }}</span>
                </div>
                <span class="fame__nav fame__back" @click="prev">Назад</span>
                <span class="fame__nav fame__fwd" @click="next">Вперед</span>
            </div>
        </template>
    </custom-pagination>
</template>

<script>
import CustomPagination from '../../../components/ui/CustomPagination.vue';
export default {
    name: 'FamePagination',
    components: {
        CustomPagination,
    },
    data() {
        return {
            currentPage: 6,
            perPage: 50,
            maxItems: 386,
        }
    },
};
</script>