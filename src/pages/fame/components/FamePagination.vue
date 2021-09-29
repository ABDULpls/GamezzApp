<template>
    <custom-pagination :max-items="maxItems" :page="currentPage" :per-page="perPage">
        <template v-slot="{go, next, prev, links, maxPages, currentPage}">
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

                <base-button
                    class="btn btn-string fame__nav fame__back"
                    :disabled="currentPage === 1"
                    @click="prev">
                    Назад
                </base-button>

                <base-button
                    class="btn btn-string fame__nav fame__fwd"
                    :disabled="currentPage === maxPages"
                    @click="next">
                    Вперед
                </base-button>
            </div>
        </template>
    </custom-pagination>
</template>

<script>
import BaseButton from '../../../components/ui/button/BaseButton.vue';
import CustomPagination from '../../../components/ui/CustomPagination.vue';

export default {
    name: 'FamePagination',
    components: {
        CustomPagination,
        BaseButton,
    },
    data() {
        return {
            currentPage: 1,
            perPage: 50,
            maxItems: 386,
        }
    },
};
</script>