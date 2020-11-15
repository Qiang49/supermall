import { createRouter, createWebHistory } from 'vue-router'
const Home = () => require('../views/home/Home')
const Category = () => require('../views/category/Category')
const Cart = () => require('../views/cart/Cart')
const Profile = () => require('../views/profile/Profile')

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router