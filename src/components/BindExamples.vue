<template>
  <div class="main">
    <span v-bind:title="title_attribute">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
    <span v-if="seen" v-on:click="disappear()">click to see me disappear</span>
    <span v-for="text in some_text">{{ text }}</span>
    <button type="button" v-on:click="addingText()">Add some text</button>
    <div>
      <p>{{ real_time_msg }}</p>
      <input v-model="real_time_msg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BindExamples',
    props: {
      title_attribute: String,
    },
    data() {
      return {
        seen: true,
        some_text: [
          'some text 1',
          'some text 2',
          'some text 3',
          'some text 4',
        ],
        some_text_number: 5,
        real_time_msg: 'real time message',
      }
    },
    methods: {
      disappear() {
        this.seen = false;
      },
      addingText() {
        this.some_text.push('some text ' + this.some_text_number++)
      }
    },
    beforeCreate() {
      window.console.log('before created "BindExamples.vue component"');
    },
    created() {
      window.console.log('created "BindExamples.vue component"');
    },
    beforeMount() {
      window.console.log('before mount "BindExamples.vue component"');
    },
    mounted() {
      window.console.log('mounted "BindExamples.vue component"');
    },
    beforeUpdate() {
      window.console.log('before update "BindExamples.vue component"');
    },
    updated() {
      window.console.log('updated "BindExamples.vue component"');
    },
    beforeDestroy() {
      window.console.log('before destroy "BindExamples.vue component"');
    },
    destroyed() {
      window.console.log('destroy "BindExamples.vue component"');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    padding: 1rem 0;
  }
  span {
    display: block;
    margin: 1rem 0;
  }
</style>
