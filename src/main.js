import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    window.console.log('before created vue instance');
  },
  created() {
    window.console.log('created vue instance');
  },
  beforeMount() {
    window.console.log('before mount vue instance');
  },
  mounted() {
    window.console.log('mounted vue instance');
  },
  beforeUpdate() {
    window.console.log('before update vue instance');
  },
  updated() {
    window.console.log('updated vue instance');
  },
  beforeDestroy() {
    window.console.log('before destroy vue instance');
  },
  destroyed() {
    window.console.log('destroy vue instance');
  }
}).$mount('#app');
