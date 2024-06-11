/*
file nel quale ci saranno le rotte delle pagine 
importare createRouter e createWebHistory

importare le pagine
es. import AppHome from './pages/AppHome.vue'

inizializzare una variabile routes nel quale ci saranno le rotte delle pag

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'AppHome',
            component: AppHome
        }
    ]
});

*/

import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Posts from './pages/Posts.vue';
import PostCreate from './pages/PostCreate.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'AppHome',
            component: Home
        },
        {
            path: '/login',
            name: 'AppLogin',
            component: Login
        },
        {
            path: '/posts',
            name: 'AppPosts',
            component: Posts
        },
        {
            path: '/posts/create',
            name: 'AppPostCreate',
            component: PostCreate
        }
    ]
});

export {router};