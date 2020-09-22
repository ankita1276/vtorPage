import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ComponentService } from '../../service/component.service';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
email: any;
number:any;
  showError:boolean=false;
  Message:any;
  constructor(private router: Router,private viewportScroller: ViewportScroller, private service: ComponentService) { }

  ngOnInit(): void {
    this.showError=false;
    this.email=null;
    this.number=null;
  }
  onClick(path: string){
    this.router.navigate([]).then(result => {  window.open(path, '_self'); });
  }
  samePageRoute(elementid){
    if(elementid){
      this.viewportScroller.scrollToAnchor(elementid);
    }
  }
  submit(){
    this.showError=true;
    if(this.email!=null && this.number!=null)
    {
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.email+'&Phone Number='+this.number+'&FormType=Contact Us');
    this.Message="Thank You For Reaching Us !! Our Representative Will Contact You Within 24 Hrs";
    
    }
    else{
      
      this.Message="Error : Please Fill All The Details Properly This Would Help In Clear Communication.  ";
        
    }
   
    this.delay(3000).then(any=>{
     this.ngOnInit();
 });

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
 ShowError()
 {
   return this.showError;
 }
}
