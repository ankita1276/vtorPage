import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/shared/service/component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  footerEmail: any;
  footerName: any;
  footerNumber: any;
  content = {
    "bgImage": 'booking',
    "title": 'Appointment booking system',
    'subTitle': 'Extremely user friendly tool for all your appointment management needs. Preferred for any business by ticketing system.',
    "getDetailsForm": true,
    "button": [
      {
        "title": 'Read More',
        "style": 'blury-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Admin Portal',
    "paragraph": 'Add a onetime / recurring and online / offline event for your customers to book an appointment for. Edit/ Disable / Delete anytime, if required'
    }, {
      "title": 'Host App',
      "paragraph": 'This app is for the owners of the event for them to chat/video conference with their clients'
    }, {
      "title": 'Client App',
      "paragraph": 'This app is for end users/clients which allow them to book an appointment as per their convinience'
    }, {
      "title": 'Payment Gateway Integration',
      "paragraph": 'We have a robust and seamless payment gateway integration to collect online payments which reduces the amount on ‘no-sees’ after booking an appointment'
    }, {
      "title": "QR scanning system for managing touchless offline appointments",
      "paragraph": 'For offline events, we allow the customers to scan the QR on their arrival to mark their presence for the appointment which give customers the touchless experience Mandatory in the Covid situations'
    }, {
      "title": "Event subscription",
      "paragraph": 'Our app allow users to subscibe for a recurring event if he / she wishes to by applying various available filters'
    }]
  Message: string;
  showError: boolean=false;

  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.cardContent,"cardContent");
    window.scrollTo(0, 0);
    this.service.setShowHeader(false);
    console.log(this.router.url); 
    this.footerEmail=null; 
      this.footerName=null ;
      this.footerNumber=null;
      this.showError=false;
  }
  submit()
  {
    console.log("abc");
    this.showError=true;
    if(this.footerEmail!=null &&
      this.footerName!=null &&
      this.footerNumber!=null)
      {
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.footerEmail+
    '&Form Type=Booking Form Page Enquiry&Name='+this.footerName+'&Phone Number='+this.footerNumber);
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
