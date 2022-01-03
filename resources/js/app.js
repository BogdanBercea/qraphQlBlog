import Vue from 'vue'
import VueRouter from 'vue-router';
import PostList from './PostList'
import Post from './Post'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import './bootstrap'

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
];

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://graphqlblog.test/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
