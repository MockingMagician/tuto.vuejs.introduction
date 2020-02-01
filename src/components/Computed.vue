<template>
    <div>
        <span>The message: "{{message}}"</span>
        <span>Number of chars in message via computed: "{{countCharsInMessage}}"</span>
        <span>Number of chars in message via method: "{{countMessageChars()}}"</span>
        <span>Again number of chars in message via computed: "{{countCharsInMessage}}"</span>
        <span>Again number of chars in message via method: "{{countMessageChars()}}"</span>
        <input v-model="car_color">
        <input v-model="car">
        <input v-model="seats_in_car">
        <span>My car via watchers: {{fullDescriptionOfMyCarViaWatchers}}</span>
        <span>My car via computed: {{fullDescriptionOfMyCarViaComputed}}</span>
        <input class="long-input" v-model="fullDescriptionOfMyCarViaComputedWithSetterAndGetter">
        <span>My car via computed (get & set): {{fullDescriptionOfMyCarViaComputedWithSetterAndGetter}}</span>
    </div>
</template>

<script>
    export default {
        name: "Computed",
        data() {
            return {
                message: 'This is so cool',
                car: 'ferrari',
                car_color: 'red',
                seats_in_car: 2,
                fullDescriptionOfMyCarViaWatchers: '',
            }
        },
        watch: {
            car() {
                this.fullDescriptionOfMyCarViaWatchers = `My cars is a ${this.car_color} ${this.car} and have ${this.seats_in_car} seats`;
            },
            car_color() {
                this.fullDescriptionOfMyCarViaWatchers = `My cars is a ${this.car_color} ${this.car} and have ${this.seats_in_car} seats`;
            },
            seats_in_car() {
                this.fullDescriptionOfMyCarViaWatchers = `My cars is a ${this.car_color} ${this.car} and have ${this.seats_in_car} seats`;
            },
        },
        computed: {
            countCharsInMessage() {
                window.console.log('once');
                return this.message.split('').length;
            },
            fullDescriptionOfMyCarViaComputed() {
                return `My cars is a ${this.car_color} ${this.car} and have ${this.seats_in_car} seats`;
            },
            fullDescriptionOfMyCarViaComputedWithSetterAndGetter: {
                get() {
                    return `My cars is a ${this.car_color} ${this.car} and have ${this.seats_in_car} seats`;
                },
                set(newValue) {
                    let matches = newValue.match(/^My cars is a ([a-z]+) ([a-z]+) and have ([0-9]+) seats$/i);
                    if (!Array.isArray(matches)) {
                        return;
                    }
                    this.car_color = matches[1];
                    this.car = matches[2];
                    this.seats_in_car = matches[3];
                }
            }
        },
        methods: {
            countMessageChars() {
                window.console.log('each time');
                return this.message.split('').length;
            }
        },
        mounted() {
            window.messageFromConsole = (value) => {
                this.message = value;
            }
        }
    }
</script>

<style scoped>
    span {
        display: block;
        margin: 1rem 0;
    }

    .long-input {
        display: inline-block;
        min-width: 20rem;
        max-width: 100vw !important;
    }
</style>
