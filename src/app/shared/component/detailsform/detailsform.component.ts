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
  type:any[];
  constructor(private router: Router, private service: ComponentService) {}

  ngOnInit(): void {
    // console.log(this.name,this.email,this.number,this.router.url,"form");
  }
  submit(){
    console.log(this.name,this.email,this.number,this.router.url,"form");
    // const result : string[] = [];
    
    this.type=this.router.url.split('/');
    let typeString:String=this.type[this.type.length-1];
    typeString=typeString.toUpperCase()+ " Form Page Enquiry";
   
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.email+
    '&Form Type='+typeString+'&Name='+this.name+'&Phone Number='+this.number);
  }
  
}
