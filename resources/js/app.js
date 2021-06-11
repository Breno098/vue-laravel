require('./bootstrap');

import Vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Main from './pages/Main.vue'

new Vue({
    vuetify,
    router,
    ...Main
});

