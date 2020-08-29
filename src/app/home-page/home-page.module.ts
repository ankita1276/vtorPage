import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page.routing';
import { NightOwlerComponent } from './night-owler/night-owler.component';
import { SharedModule } from '../shared/shared.module';
import { EcommerceComponent } from './ecommerce/ecommerce.component';



@NgModule({
  declarations: [NightOwlerComponent, EcommerceComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
