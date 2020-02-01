<template>
    <div class="main">
        <span>Message: {{ msg }}</span>
        <span v-once>This will never change: {{ msg }}</span>
        <button type="button" v-on:click="changeMessage()">Change msg</button>
        <span>Html interpolation: {{ some_html }}</span>
        <span v-html="some_html">This content will never display => replaced by v-html</span>
        <span>{{ msg.split('').reverse().join('') }}</span>
    </div>
</template>

<script>
    export default {
        name: "Interpolation",
        data() {
            return {
                msg_hello: 'Hello there!',
                msg_goodbye: 'Goodbye there!',
                msg: '',
                some_html: '<i>italic message</i>'
            }
        },
        methods: {
            changeMessage() {
                if (this.msg === this.msg_hello) {
                    this.msg = this.msg_goodbye;
                    return;
                }
                this.msg = this.msg_hello;
            }
        },
        beforeMount() {
            this.msg = this.msg_hello;
        }
    }
</script>

<style scoped>
    .main {
        padding: 1rem 0;
    }
    span {
        display: block;
        margin: 1rem 0;
    }
</style>
