import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page.routing';
import { NightOwlerComponent } from './night-owler/night-owler.component';
import { SharedModule } from '../shared/shared.module';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FormsModule } from '@angular/forms';
import { ELearningComponent } from './e-learning/e-learning.component';
import { CommunityComponent } from './community/community.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [NightOwlerComponent, EcommerceComponent, ELearningComponent, CommunityComponent, BookingComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomePageModule { }
