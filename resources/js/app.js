import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import moment from "moment"

import './bootstrap'

import VueRouter from 'vue-router';
import PostList from './PostList'
import Post from './Post'
import TopicPostList from './TopicPostList'
import AuthorPostList from './AuthorPostList'
import NotFound from './NotFound'

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
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];

const apolloClient = new ApolloClient({
  uri: 'http://graphqlblog.test/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('timeAgo', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format('MMMM Do YYYY'));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
