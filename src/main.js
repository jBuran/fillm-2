// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Dont need it
// import 'firebase/messaging'

// import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    let config = {
      apiKey: 'AIzaSyBFFx6-Y4nnD0SKX4bB_ttVUgx3A-BYiso',
      authDomain: 'film-vue-37164.firebaseapp.com',
      databaseURL: 'https://film-vue-37164-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'film-vue-37164',
      storageBucket: 'film-vue-37164.appspot.com',
      messagingSenderId: '777863186617',
      appId: '1:777863186617:web:2ba0bf336ab4c2af8db368',
      measurementId: 'G-S443MLMF5L'
    }

    firebase.initializeApp(config)

    // Auth Check
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Check Logged
        this.$store.dispatch('loggedUser', user)
        // Loading All Tasks
        this.$store.dispatch('loadTasks')
        // Loading All Tags
        this.$store.dispatch('loadTags')
        console.log(this.$store.getters.message.title)
      }
    })
  }
})
