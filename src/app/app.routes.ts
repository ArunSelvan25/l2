import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing-page/landing-page';
import { ProductListing } from './pages/products/product-listing/product-listing';
import { Checkout } from './pages/products/checkout/checkout';
import { OrderPlacedStatus } from './pages/order/order-placed-status/order-placed-status';
import { Orders } from './pages/order/orders/orders';
import { OrderView } from './pages/order/order-view/order-view';

export const routes: Routes = [
    {
        path:'',
        component: LandingPage,
        data: { isStickyNavbar: true },
    },
    {
        path:'products',
        component: ProductListing
    },
    {
        path:'checkout',
        component: Checkout
    },
    {
        path:'order-completed/:status',
        component: OrderPlacedStatus
    },
    {
        path:'orders',
        component: Orders,
        data: { isStickyNavbar: true },
    },
    {
        path:'order/view',
        component: OrderView,
        data: { isStickyNavbar: true },
    },
];
