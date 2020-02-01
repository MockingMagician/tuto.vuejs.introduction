<template>
    <div>
        <button type="button" v-on:click="addParagraph()">Add a paragraph</button>
        <button type="button" v-on:click="reverse()">Reverse a paragraph</button>
        <p v-bind:key="index" v-for="(paragraph, index) in paragraphs">At index '{{index}}': {{paragraph}}</p>
        <br><br>
        <form v-on:submit.prevent="updateAddProp">
            <select name="propertyName">
                <option v-bind:key="propertyName" v-for="(propertyValue, propertyName) in myObject">
                    {{propertyName}}
                </option>
            </select>
            <input name="propertyValue">
            <button>Update property</button>
        </form>
        <p v-bind:key="propertyName" v-for="(propertyValue, propertyName) in myObject">{{propertyName}}: {{propertyValue}}</p>
    </div>
</template>

<script>
    import faker from 'faker';
    export default {
        name: "Iteration",
        data() {
            return {
                myObject: {
                    propertyOne: 'value one',
                    propertyTwo: 'value two',
                    propertyThree: 'value three',
                },
                paragraphs: this.getParagraphs(),
            }
        },
        methods: {
            getParagraphs() {
                let ps = [];
                for (let i = 0; i < 10; i++) {
                    ps.push(faker.lorem.paragraph());
                }

                return ps;
            },
            addParagraph() {
                this.paragraphs.push(faker.lorem.paragraph())
            },
            reverse() {
                this.paragraphs.reverse()
            },
            updateAddProp(event) {
                let fd = new FormData(event.target);
                if (this.myObject[fd.get('propertyName')] === undefined) {
                    return;
                }
                this.myObject[fd.get('propertyName')] = fd.get('propertyValue');
            }
        }
    }
</script>

<style scoped>

</style>
