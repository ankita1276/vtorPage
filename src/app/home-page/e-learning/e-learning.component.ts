import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/shared/service/component.service';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.scss']
})
export class ELearningComponent implements OnInit {

  footerEmail: any;
  footerName: any;
  footerNumber: any;
  content = {
    "bgImage": 'elearning',
    "title": 'E-Learning & Entertainment',
    'subTitle': 'Consolidated robust platform for content creators, online coaches, classes and college with a bunch of super useful features.',
    "getDetailsForm": true,
    "button": [
      {
        "title": 'Read More',
        "style": 'blury-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Admin panel to create courses and curiculum ',
    "paragraph": 'If you do not want to directly map your customer orders to the vendors and select a vendor to assign a specific item out of the list of vendors who can carter the order. We have this feature covered for you.'
    }, {
      "title": 'Unlimited virtual video conferencing and live streaming',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": 'Attendence Management system',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": 'Vtor Labs Unique Student Attentivness Score calculator',
      "paragraph": 'Create your own virtual geography using pincodes while defining'
    }, {
      "title": "Leaderboard Management",
      "paragraph": 'Create your own virtual geography using pincodes while defining '
    }, {
      "title": "Online payment gateway integration",
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
