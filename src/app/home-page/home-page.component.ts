import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.email,"homeee");
    
  }
  btnRoute(path){
    this.router.navigate([path]);
  }

}
