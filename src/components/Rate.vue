<template>
  <div class="rating" :class="classes()" @click="clickOnStar">
    <div id="1" class="rating__star"></div>
    <div id="2" class="rating__star"></div>
    <div id="3" class="rating__star"></div>
    <div id="4" class="rating__star"></div>
    <div id="5" class="rating__star"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Rate",
  data() {
    return {
      star: "",
    };
  },

  methods: {
    classes() {
      return `rating${this.star}`;
    },

    clickOnStar(event) {
      this.star = event.target.id || "";
    },
  },
});
</script>
