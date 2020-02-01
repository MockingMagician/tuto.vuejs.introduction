<template>
    <div>
        <br><br>
        <button type="button" v-on:click="showHide()">{{ button_text }}</button>
        <span v-if="show">My text is here sometimes!</span>
        <br><br>
        <button type="button" v-on:click="showHide2()">{{ button_text2 }}</button>
        <span v-if="show2">When I'm here...</span>
        <span v-else>...other hiding</span>
        <br><br>
        <span v-if="show">I'm here with the first...</span>
        <span v-else-if="show2">...me with only second...</span>
        <span v-else>...and me with the hiding</span>
        <br><br>
        <button type="button" v-on:click="showHide3()">{{ button_text3 }}</button>
        <span v-show="show3">When I'm here...</span>
    </div>
</template>

<script>
    export default {
        name: "Conditional",
        data() {
            return {
                show: true,
                show2: true,
                show3: true,
                button_text3: 'show/hide with css display'
            }
        },
        computed: {
            button_text() {
                return this.show ? 'Hide my text' : 'Show my text';
            },
            button_text2() {
                return this.show2 ? 'Hide my text' : 'Show my text';
            },
        },
        methods: {
            showHide() {
                this.show = !this.show;
            },
            showHide2() {
                this.show2 = !this.show2;
            },
            showHide3() {
                this.show3 = !this.show3;
            },
        }
    }
</script>

<style scoped>
    span {
        display: block;
        margin: 1rem 0;
    }
</style>
