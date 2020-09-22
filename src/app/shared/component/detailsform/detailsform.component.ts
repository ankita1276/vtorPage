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
  Message: string;
  showError:boolean=false;
  constructor(private router: Router, private service: ComponentService) {}

  ngOnInit(): void {
    // console.log(this.name,this.email,this.number,this.router.url,"form");
    this.email=null;
    this.name=null;
    this.number=null;
    this.showError=false;
  }
  submit(){
    console.log(this.name,this.email,this.number,this.router.url,"form");
    // const result : string[] = [];
    
    this.type=this.router.url.split('/');
    let typeString:String=this.type[this.type.length-1];
    typeString=typeString.toUpperCase()+ " Form Page Enquiry";
    this.showError=true;
    if(this.email!=null && this.number!=null &&  this.name!=null)
    {
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.email+
    '&Form Type='+typeString+'&Name='+this.name+'&Phone Number='+this.number);
    this.Message="Thank You For Reaching Us !! Our Representative Will Contact You Within 24 Hrs";
    
    this.delay(3000).then(any=>{
      this.ngOnInit();
  });
    }
    else{
      
      this.Message="Error : Please Fill All The Details Properly This Would Help In Clear Communication.  ";
      this.delay(3000).then(any=>{
        this.showError=false;
    });
    }

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
 ShowError()
 {
   return this.showError;
 }
  
}
