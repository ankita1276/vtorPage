import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ComponentService } from '../../service/component.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
email: any;
number:any;
  
  constructor(private router: Router,private viewportScroller: ViewportScroller, private service: ComponentService) { }

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
  submit(){
  
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.email+'&Phone Number='+this.number+'&FormType=Contact Us');
  }
}
