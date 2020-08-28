import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './component/card/card.component';
import { HeaderComponent} from './component/header/header.component';



@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, HeaderComponent]
})
export class SharedModule { }
