import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './component/card/card.component';
import { HeaderComponent} from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { DetailsformComponent } from './component/detailsform/detailsform.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent, HeaderComponent, BannerComponent, DetailsformComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CardComponent, HeaderComponent, BannerComponent]
})
export class SharedModule { }
