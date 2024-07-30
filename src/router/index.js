import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Shop from '@/views/Shop.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import SingleProduct from '@/views/SingleProduct.vue';
import Cart from '@/views/Cart.vue';
import Checkout from '@/views/Checkout.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

    {
        path: '/single',
        name: 'SingleProduct',
        component: SingleProduct
    },

    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },

    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

