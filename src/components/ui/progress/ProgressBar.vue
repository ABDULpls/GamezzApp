<template>
    <div class="quiz__progressbar" :style="progressStyle"></div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        time: {
            type: Number,
        },
        active: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            progressWidth: 0,
        }
    },
    computed: {
        progressStyle() {
            return `background: linear-gradient(90deg, #0000 ${this.progressWidth}%, #253153 0), linear-gradient(90deg, #fcd43f, #e93139);`;
        }
    },
    methods: {
        progress() {
            let currentTime = null;
            const time = this.time >= 1000 ? this.time : this.time * 1000;

            const animate = timestamp => {
                if (!currentTime) {
                    currentTime = timestamp;
                }
                const progress = (timestamp - currentTime) / time;
                this.progressWidth = progress * 100;

                if (this.progressWidth <= 100) {
                    requestAnimationFrame(animate);
                } else {
                    this.progressWidth = 0;
                    this.progress();
                }
            }
            requestAnimationFrame(animate);
        },
    },
    mounted() {

        if (this.active) {
            this.progress();
        }
    }
};
</script>
