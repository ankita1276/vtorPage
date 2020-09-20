import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent} from './component/card/card.component';
import { HeaderComponent} from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { DetailsformComponent } from './component/detailsform/detailsform.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CardComponent, HeaderComponent, BannerComponent, DetailsformComponent, FooterComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  exports: [CardComponent, HeaderComponent, BannerComponent, FooterComponent]
})
export class SharedModule { }
