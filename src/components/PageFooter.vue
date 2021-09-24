<template>
    <footer class="footer">
        <span
            v-for="menuItem in menu"
            class="footer__item footer-games"
            :class="[
                menuItem.className,
                $route.name === menuItem.routeName && menuItem.className + '-active',
            ]"
            @click="toPage(menuItem.routeName)"
        >
            {{ menuItem.label }}
        </span>
    </footer>
</template>

<script>
import {PAGE_FOOTER_MENU} from '../config/config';

export default {
    name: 'PageFooter',
    inject: ['toPage'],
    data() {
        return {
            menu: PAGE_FOOTER_MENU,
        }
    },
    computed: {

    },

};
</script>