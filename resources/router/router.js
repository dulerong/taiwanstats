import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Data from '../views/Data';

// this page sets up router, and router will be utilized in main.js
// specifies what page to serve on which director
// eg: for root directory "/", component Home will be serve, which is ./views/Home.vue

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home }, 
        { path: '/about', name: 'about', component: About},
        { path: '/data', name: 'data', component: Data}
    ]





})