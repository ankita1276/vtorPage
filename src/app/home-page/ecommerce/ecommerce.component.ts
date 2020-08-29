import { Component, OnInit } from '@angular/core';

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
        "style": 'blur-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Administered Order Management System',
    "paragraph": 'If you do not want to directly map your customer orders to the vendors and select a vendor to assign a specific item out of the list of vendors who can carter the order. We have this feature covered for you.'
    }, {
      "title": 'Service area wise product catalogue and pricing management',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": 'Mobile friendly Website and Mobile Application for your Buyers',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": 'Cross-Platform Mobile App for Vendors to maintain product catalogues and orders',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": "Cross-Platform Mobile App for delivery partners",
      "paragraph": 'Create your own virtual geography using pincodes while defining '
    }, {
      "title": "Suppier verification and ratings system and detailed dashboarding",
      "paragraph": 'Create your own virtual geography using pincodes while defining  '
    }]
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardContent,"cardContent");
    
  }

}
