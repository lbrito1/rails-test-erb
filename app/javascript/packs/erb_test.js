import Vue from 'vue/dist/vue.js'
import ErbTest from '../erb_test.vue'

document.addEventListener('DOMContentLoaded', () => {
  window.vm = new Vue({
    el: "#erb-test",
    template: '<erb-test/>',
    components: { ErbTest }
  })
})
