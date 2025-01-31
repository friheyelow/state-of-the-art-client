import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
 
export const eventBus = new Vue({
  methods: {
    listEdit(memo, index) {
      this.$emit('listEdit', memo, index)
    } 
  }
})

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.dispatch('getMemberInfo')
  },
  render: h => h(App)
}).$mount('#app')
