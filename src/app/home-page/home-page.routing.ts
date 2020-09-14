import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { NightOwlerComponent } from './night-owler/night-owler.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { CommunityComponent } from './community/community.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
    {
        path: 'nightOwler',
        component: NightOwlerComponent
    },
    {
        path: 'e-commerce',
        component: EcommerceComponent
    },
    {
        path: 'e-learning',
        component: ELearningComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    },
    {
        path: 'appointment-booking',
        component: BookingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
