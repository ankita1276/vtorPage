import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

    console.log(this.router.url,"(this.router.url");
    
    // if (this.router.url === '/') {
    //   this.show = true;
    // }
  }
  onClick(href){
    console.log(href,"href");
    
  }

}
