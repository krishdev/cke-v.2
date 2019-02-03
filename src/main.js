// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import VueFire from 'vuefire'
import firebase from 'firebase'
import bootstrap from 'bootstrap'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'


Vue.use(VueResource);
Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyAWoUg2sgNZ_DzIY1aPdbv4U9FQx59oJ0c",
  authDomain: "chotukiedu.firebaseapp.com",
  databaseURL: "https://chotukiedu.firebaseio.com",
  projectId: "chotukiedu",
  storageBucket: "chotukiedu.appspot.com",
  messagingSenderId: "449693301627"
})
window.fancybox = require("fancybox")($);
export const db = firebase.database()
export const fb = firebase.auth()
window.db = db;
window.fb = fb;
window.provider = new firebase.auth.GoogleAuthProvider();
// db.ref("posts").on("value", function(response){
//   console.log(response.val());
// });

/**
 *     // Initialize Firebase
    var config = {
       
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    var provider = new firebase.auth.GoogleAuthProvider();

*/
Vue.config.productionTip = false

Vue.directive("title", {
  bind: function(el, binding, vnode){
    var title = el.getAttribute("data-title") || "Chotu Ki Education - On Action";
    document.title = title;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
