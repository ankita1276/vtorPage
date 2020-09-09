import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ComponentService } from '../../service/component.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  selectedItem: any;
  deviceType = ''

  constructor(private router: Router,private viewportScroller: ViewportScroller, private service: ComponentService) { }

  ngOnInit(): void {
    this.service.getShowHeader().subscribe((name)=>{
      this.show = name;
      console.log(this.show,name,"--------------");
    });
    this.deviceType = this.getDeviceType();
  }
  onClick(elementId: string){
    console.log(this.router.url,"head");
    this.selectedItem = elementId;
    console.log(this.selectedItem );
    this.viewportScroller.scrollToAnchor(elementId);
  }

  getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return 'mobile';
    }
    return 'desktop';
  }
}
