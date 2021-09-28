<script>
export default {
    name: 'CustomPagination',
    emits: {
        'update:pagination': null,
    },
    props: {
        maxItems: {
            type: Number,
        },
        page: {
            type: Number,
            default: 1,
        },
        perPage: {
            type: Number,
            default: 50,
        }
    },

    data() {
        return {
            currentPage: this.page,
        }
    },

    render() {
        return this.$slots.default({
            go: this.go,
            next: this.next,
            prev: this.prev,
            currentPage: this.currentPage,
            links: this.links,
        });
    },

    computed: {
        links() {
            const pages = Math.floor(this.maxItems / this.perPage);
            const emptyLink = {label: '...'};
            const links = [];

            console.log(this.currentPage);

            links.push({
                page: 1,
                label: `1-${this.perPage}`,
            });

            if (this.currentPage > 1 && this.currentPage < pages) {
                links.push(emptyLink);
                links.push({
                    page: this.currentPage,
                    label: `${((this.currentPage * this.perPage) + 1)}-${((this.currentPage + 1) * this.perPage)}`,
                });
                links.push(emptyLink);
            } else {
                links.push(emptyLink);
            }

            links.push({
                page: pages,
                label: `${((pages) * this.perPage) + 1}-${this.maxItems}`,
            });

            return links;
        }
    },

    methods: {
        go(page) {
            if (typeof page === 'undefined') {
                return;
            }

            this.currentPage = page;
            this.$emit('update:pagination', {
                perPage: this.perPage,
                offset: (this.currentPage - 1) * this.perPage,
            });
        },

        next() {
            if (this.currentPage * this.perPage >= this.maxItems) {
                return;
            }

            this.currentPage++;
            this.go(this.currentPage);
        },

        prev() {
            if (this.currentPage <= 1) {
                return;
            }

            this.currentPage--;
            this.go(this.currentPage);
        }
    }
};
</script>
