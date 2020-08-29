import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { NightOwlerComponent } from './night-owler/night-owler.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
    },
    {
        path: 'nightOwler',
        component: NightOwlerComponent
    },
    {
        path: 'e-commerce',
        component: EcommerceComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
