<template>
  <div id="app">
    <h1>Vue.js</h1>
    {{ msg }}
    <h2>Binding</h2>
    <bind-examples title_attribute="this is a f*ck*ng title"/>
    <hr>
    <h2>Loops</h2>
    <ol>
      <todo-item v-for="todo in todos" v-bind:todo="todo"/>
    </ol>
    <hr>
    <h2>Interpolation</h2>
    <interpolation/>
    <hr>
    <h2>Computed</h2>
    <computed/>
    <hr>
    <h2>Styling</h2>
    <styling v-bind:class="'bg-low-grey'"/>
    <h2>Conditional</h2>
    <button type="button" v-on:click="ghost()">make all (dis)appear</button>
    <br><br>
    <conditional v-if="appear"/>
    <h2>Loops 2</h2>
    <iteration/>
  </div>
</template>

<script>
  import BindExamples from "./components/BindExamples";
  import TodoItem from "./components/TodoItem";
  import Interpolation from "./components/Interpolation";
  import Computed from "./components/Computed";
  import Styling from "./components/Styling";
  import Conditional from "./components/Conditional";
  import Iteration from "./components/Iteration";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'hello everyone',
        todos: [
          {task: 'Eat an ice cream', important: false,},
          {task: "Make my homework's", important: true,},
          {task: 'Call my lover', important: true,},
          {task: 'Sleep some time', important: false,},
          {task: 'Go to supermarket', important: false,},
        ],
        appear: true,
      }
    },
    methods: {
      ghost() {
        this.appear = !this.appear;
      },
    },
    components: {
      Iteration,
      Conditional,
      Styling,
      Computed,
      Interpolation,
      TodoItem,
      BindExamples
    },
    beforeCreate() {
      window.console.log('before created "App.vue component"');
    },
    created() {
      window.console.log('created "App.vue component"');
    },
    beforeMount() {
      window.console.log('before mount "App.vue component"');
    },
    mounted() {
      window.console.log('mounted "App.vue component"');
    },
    beforeUpdate() {
      window.console.log('before update "App.vue component"');
    },
    updated() {
      window.console.log('updated "App.vue component"');
    },
    beforeDestroy() {
      window.console.log('before destroy "App.vue component"');
    },
    destroyed() {
      window.console.log('destroy" pp.vue component"');
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  h1 {
    margin: 5rem 0;
  }

  h2 {
    margin: 3rem 0;
  }
</style>
