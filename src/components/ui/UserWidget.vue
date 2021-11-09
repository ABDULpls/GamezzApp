<template>
	<router-link tag="button" :to="{name:'ProfilePage'}">
		<div class="miniprofile" :class="classes">
			<span class="miniprofile__level">{{ user.level }}</span>
			<img class="miniprofile__icon"
				 :src="user.avatar"
				 alt="pic"
				 width="35"
				 height="35">
			<span class="miniprofile__results stars">{{ normalizeNumber(user.rating) }}</span>
			<span class="miniprofile__results crystals">{{ normalizeNumber(user.crystals) }}</span>
		</div>
	</router-link>
</template>

<script>
import {normalizeNumber} from '../../utils/utils.js';

export default {
	name: 'UserWidget',
	props: {
		user: {
			type: Object,
			required: true,
		},

		fixed: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		classes() {
			return {
				'miniprofile-fix': this.fixed,
			};
		}
	},
	methods: {
		normalizeNumber,
	}
};
</script>
