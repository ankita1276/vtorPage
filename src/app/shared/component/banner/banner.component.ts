
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  selectedItem: any;
@Input() content;
  constructor() { }

  ngOnInit(): void {
    console.log(this.content,"content");
    
  }

}
