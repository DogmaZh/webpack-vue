import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router';
import './styles/base.styl';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})