// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import pressure from 'vue-pressure'

console.log(pressure)
console.log(require('../src/directive/pressure'))
console.log(require('../public/index'))

Vue.config.productionTip = false

Vue.use(pressure)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
