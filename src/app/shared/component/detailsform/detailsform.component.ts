import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.scss']
})
export class DetailsformComponent implements OnInit {
  email: any;
  name: any;
  number: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.name,this.email,this.number,"form");
  }
  submit(){
    console.log(this.name,this.email,this.number,"form");
  }

}
