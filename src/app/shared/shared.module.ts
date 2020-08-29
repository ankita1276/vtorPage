import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './component/card/card.component';
import { HeaderComponent} from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';



@NgModule({
  declarations: [CardComponent, HeaderComponent, BannerComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, HeaderComponent,BannerComponent]
})
export class SharedModule { }
