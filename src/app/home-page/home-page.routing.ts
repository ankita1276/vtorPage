import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { NightOwlerComponent } from './night-owler/night-owler.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
    },
    {
        path: 'nightOwler',
        component: NightOwlerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
