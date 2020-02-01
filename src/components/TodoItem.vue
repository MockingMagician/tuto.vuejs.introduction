<template>
    <li ref="li" v-bind:class="{ 'bg-green': bgIsGreen, important: todo.important }" v-on:click="changeBgColor()">{{ todo.task }}</li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            todo: Object,
        },
        data() {
            return {
                bgIsGreen: false,
            }
        },
        methods: {
            changeBgColor() {
                this.bgIsGreen = !this.bgIsGreen;
            },
            onResize() {
                window.console.log(this.$refs.li.clientHeight, this.$refs.li.clientWidth);
            },
        },
        mounted() {
            window.addEventListener('resize', this.onResize);
        },
        destroyed() {
            window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style scoped>
    .bg-green {
        background-color: green !important;
    }
    .important {
        background-color: orange;
    }
</style>
