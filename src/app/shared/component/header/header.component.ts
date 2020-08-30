import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  selectedItem: any;

  constructor(private router: Router,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  onClick(elementId: string){
    console.log(this.router.url,"head");
    
    this.selectedItem = elementId;
    console.log(this.selectedItem );
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
