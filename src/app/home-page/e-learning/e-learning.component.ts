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
    'subTitle': 'Consolidated robust platform for content creators, online coaches, classes and college with a bunch of real problem solving features.',
    "getDetailsForm": true,
    "button": [
      {
        "title": 'Read More',
        "style": 'blury-btn'
      }
    ]
  };
  cardContent = [{
    "title": 'Admin panel to create courses and curiculum with payment gateway integration',
    "paragraph": 'Create courses and cirriculum using pre-recorded sessions and set a price to the course for the student to be able to buy from the catalogue of courses created by you. Pre integrated Payment Gateway.'
    }, {
      "title": 'Unlimited virtual video conferencing and live streaming',
      "paragraph": 'Initiate and attend unlimited live webinars for your students and attract new customers by allowing then to attend free sessions.'
    }, {
      "title": 'Attendence Management system',
      "paragraph": 'After buying sessions and subscribing for any course, our system allows to track whether if a student missed out on any session of their course or not'
    }, {
      "title": 'Vtor Labs Unique Student Attentivness Score calculator',
      "paragraph": 'Student Attentivess over online classes is the most important problem and we allow a set of features which calculates the attentiveness of the student whilest attaneding any class'
    }, {
      "title": "Leaderboard Management",
      "paragraph": 'Competitive learning helps to create motivation in your customers to continuously perform better in whatever they are pursuing. We offer a customizable Leaderboard which allow the customers to keep a track of their ranking'
    }, {
      "title": "One on One Mentoring",
      "paragraph": 'Students can opt for one-on-one mentorship using our platform which allows them to chat and attend video calls within the time spam of the mentorship subscription'
    }]
  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.cardContent,"cardContent");
    window.scrollTo(0, 0);
    this.service.setShowHeader(false);
    console.log(this.router.url); 
  }


}
