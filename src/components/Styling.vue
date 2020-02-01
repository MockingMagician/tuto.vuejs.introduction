<template>
    <div>
        <span v-bind:class="{italic: isItalic}">You gonna style me</span>
        <span class="italic">You gonna style me</span>
        <span class="italic" v-bind:class="'bg-green'">You gonna style me</span>
        <span v-bind:class="['italic', 'bg-orange']">You gonna style me</span>
        <span v-bind:class="italicAndBlue">You gonna style me</span>
        <span v-bind:class="['italic', orange]">You gonna style me</span>
        <span v-bind:class="myOwnStyle">You gonna style me</span>
        <span v-bind:class="['bg-orange', myOwnStyle]">You gonna style me</span>

        <span v-bind:style="{'font-style': 'bolder', color: 'red'}">You gonna style me</span>
        <span v-bind:style="customStyle">You gonna style me</span>
    </div>
</template>

<script>
    export default {
        name: "Styling",
        data() {
            return {
                isItalic: true,
                italicAndBlue: ['italic', 'bg-blue'],
                orange: 'bg-orange',
                currentWindowHeight: 0,
                currentWindowWidth: 0,
                customStyle: {
                    color: 'blue',
                    'font-size': '2rem',
                }
            }
        },
        computed: {
            myOwnStyle() {
                return {
                    bolder: this.currentWindowWidth > 750,
                    'bg-green': this.currentWindowWidth <= 750,
                    italic: this.currentWindowHeight > 500,
                }
            }
        },
        methods: {
            recordWindowSize() {
                this.currentWindowHeight = window.innerHeight;
                this.currentWindowWidth = window.innerWidth;
            }
        },
        mounted() {
            this.recordWindowSize();
            window.addEventListener('resize', this.recordWindowSize)
        },
        destroyed() {
            window.removeEventListener('resize', this.recordWindowSize)
        }
    }
</script>

<style scoped>
    span {
        display: block;
        margin: 1rem 0;
    }
    .italic {
        font-style: italic;
    }
    .bg-green {
        background-color: green !important;
    }
    .bg-orange {
        background-color: orange;
    }
    .bg-blue {
        background-color: blue;
    }
    .bolder {
        font-weight: bolder;
    }
    .bg-low-grey {
        background-color: rgba(0,0,0,0.2);
    }
    .transform {

    }
</style>
