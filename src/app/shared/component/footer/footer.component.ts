import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
email: any;
number:any;
  constructor(private router: Router,private viewportScroller: ViewportScroller, ) { }

  ngOnInit(): void {
  }
  onClick(path: string){
    this.router.navigate([]).then(result => {  window.open(path, '_blank'); });
  }
  samePageRoute(elementid){
    if(elementid){
      this.viewportScroller.scrollToAnchor(elementid);
    }
  }
  submit(){}
}
