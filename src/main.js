import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyA41L3AlRLNeX_7l8qOUW1LaOmUZIwjJFI',
  authDomain: 'vue-firebase-login-69fb7.firebaseapp.com',
  databaseURL: 'https://vue-firebase-login-69fb7.firebaseio.com',
  projectId: 'vue-firebase-login-69fb7',
  storageBucket: 'vue-firebase-login-69fb7.appspot.com',
  messagingSenderId: '582434290893'
})

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
