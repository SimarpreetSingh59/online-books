import {createRouter, createWebHistory} from 'vue-router';

import BookIndex from '../components/books/BookIndex.vue';
import BookShow from '../components/books/BookShow.vue';
import BookCreate from '../components/books/BookCreate.vue';
import BookEdit from '../components/books/BookEdit.vue'

const routes = [
    {
        path:'/home',
        name:'home',
        component:BookIndex
    },
    {
        path:'/books/create',
        name: 'books.create',
        component: BookCreate
    },
    {
        path:'/books/:id/show',
        name: 'books.show',
        component: BookShow,
        props: true
    },
    {
        path: '/books/:id/edit',
        name: 'books.edit',
        component: BookEdit,
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