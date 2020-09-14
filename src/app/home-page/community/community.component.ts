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
        "style": 'blury-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Business Profile',
    "paragraph": 'Manage Business profiles if its a business marketing community and let everyone know about your services and products with their respective pricing and allow users to initiate conversation about the same'
    }, {
      "title": 'One on One / Group chat',
      "paragraph": 'Allow the community members to chat with each other either direct or on group'
    }, {
      "title": 'One on One / Group Video Conferencing',
      "paragraph": 'Offer unlimited video conferencing and one on one video calling for free to the members of your community'
    }, {
      "title": 'Post updates',
      "paragraph": 'Community Members can post updates on to their profile in the form of text, images and videos'
    }, {
      "title": "Like and comment other members post",
      "paragraph": 'Allows a commitee member to like or comment on other community members posts. This comes with an add-on fucitionality of censor where the admin can allow or disallow a particular comment to be shown'
    }, {
      "title": "Matrimony",
      "paragraph": 'For communities who allow members to connect for matrimony, we offer profile matching functionalites which displays high matching profiles to the users feed'
    }]
  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.cardContent,"cardContent");
    window.scrollTo(0, 0);
    this.service.setShowHeader(false);
    console.log(this.router.url); 
  }


}
