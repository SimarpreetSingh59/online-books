import {createRouter, createWebHistory} from 'vue-router';

import BookIndex from '../components/books/BookIndex.vue';
import BookShow from '../components/books/BookShow.vue';

const routes = [
    {
        path:'/home',
        name:'home',
        component:BookIndex
    },
    {
        path:'/books/:id/show',
        name: 'books.show',
        component: BookShow,
        props: true
    },
    {
        path:'/:pathMatch(.*)',
        component: {template: "Not Found"}
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});