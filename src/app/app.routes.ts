import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing-page/landing-page';
import { ProductListing } from './pages/products/product-listing/product-listing';

export const routes: Routes = [
    {
        path:'',
        component: LandingPage
    },
    {
        path:'products',
        component: ProductListing
    }
];
