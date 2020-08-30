import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/shared/service/component.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  footerEmail: any;
  footerName: any;
  footerNumber: any;
  content = {
    "bgImage": 'community',
    "title": 'Virtual Community',
    'subTitle': 'Get more connected with your community. Personalized app for your community with  feature add-ons as & when required.',
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
      "paragraph": 'Create your own virtual geography using pincodes while defining '
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
  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.cardContent,"cardContent");
    window.scrollTo(0, 0);
    this.service.setShowHeader(false);
    console.log(this.router.url); 
  }


}
