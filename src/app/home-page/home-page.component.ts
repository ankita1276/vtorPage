import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../shared/service/component.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email:any;
  constructor(private router: Router,private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.router.url); 
    this.service.setShowHeader(true);
  }
  submit(){
    console.log(this.email,"homeee");
    
  }
  btnRoute(path){
    this.router.navigate([]).then(result => {  window.open(path, '_blank'); });
  }

}
