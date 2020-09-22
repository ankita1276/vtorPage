import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ComponentService} from '../../shared/service/component.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  footerEmail: any;
  footerName: any;
  footerNumber: any;
  content = {
    "bgImage": 'ecommerce',
    "title": 'Multi-Vendor Ecommerce',
    'subTitle': 'Plug & Play Multi-Vendor online store with 24*7 Tech Support. So, you can focus on business while we take care of your store.',
    "getDetailsForm": true,
    "button": [
      {
        "title": 'Read More',
        "style": 'blury-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Administered Order Management System',
    "paragraph": 'If you do not want to directly map your customer orders to the vendors and select a vendor to assign a specific item out of the list of vendors who can carter the order. We have this feature covered for you.'
    }, {
      "title": 'Service area wise product catalogue and pricing management',
      "paragraph": 'Create your own virtual geography using pincodes and area names which allows to keep different pricing of the same products in different service areas'
    }, {
      "title": 'Mobile friendly Website and Mobile Application for your Buyers',
      "paragraph": 'Buyer application gets deployed on all of the 3 platforms. i.e. Android and iOS and Web. The Look and feel of the buyer website is totally customizable if required'
    }, {
      "title": 'Cross-Platform Mobile App for Vendors to maintain product catalogues and orders',
      "paragraph": 'Vendors will be able to register and submit the required documents and create their own product catalogue they want to share to a particular regoin. Also, manage arriving orders and assign delivery partner'
    }, {
      "title": "Super Easy MultiLingual Delivery Partner App",
      "paragraph": 'Allows delivery partner to process th delivery and open the buyer location in Maps for easy navigation. Also, offers to accept COD payments                                                                '
    }, {
      "title": "Suppier verification and ratings system and detailed dashboarding",
      "paragraph": 'Vendor administration and approval process and dashboard which provides overview and detailed reporting of sales made by individual vendors and individual service areas business in coming from'
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
      '&Form Type=ECommerce Form Page Enquiry&Name='+this.footerName+'&Phone Number='+this.footerNumber);
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
