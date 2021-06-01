require('./bootstrap');

import Vuetify from 'vuetify';
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

window.Vue = require('vue').default;

Vue.use(Vuetify)

Vue.component('router-spa', require('./pages/router-spa.vue').default );

 const app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
    router,
});

