import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../../service/component.service';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.scss']
})
export class DetailsformComponent implements OnInit {
  email: any;
  name: any;
  number: any;
  constructor(private router: Router, private service: ComponentService) {}

  ngOnInit(): void {
    // console.log(this.name,this.email,this.number,this.router.url,"form");
  }
  submit(){
    console.log(this.name,this.email,this.number,this.router.url,"form");
    // const result : string[] = [];
    let submitData : any = {
      "name": this.name,
      "email": this.email,
      "number": this.number,
      "url": this.router.url
    }
    console.log(submitData);
    this.service.sendPostRequest(submitData)
  }
}
