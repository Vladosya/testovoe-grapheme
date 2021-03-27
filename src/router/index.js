import Vue from 'vue'
import VueRouter from 'vue-router'
import DeliveryPage from '@/components/DeliveryPage'
import PaymentPage from '@/components/PaymentPage'
import FinishPage from '@/components/FinishPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Delivery',
        component: DeliveryPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/payment',
        name: 'Payment',
        component: PaymentPage
    },
    {
        path: '/finish',
        name: 'Finish',
        component: FinishPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
