import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/shared/service/component.service';

@Component({
  selector: 'app-night-owler',
  templateUrl: './night-owler.component.html',
  styleUrls: ['./night-owler.component.scss']
})
export class NightOwlerComponent implements OnInit {
  content = {
    "bgImage":'nightOwler',
    "title": 'The Nightowlers',
    'subTitle': 'One Stop Solution for all your freelancing needs. We are revolutionalizing how Freelancing works in India.',
    "subQuestion": 'Wanna Know How ?',
    "getDetailsForm": false,
    "button": [
      // {
      //   "title" : 'Visit Website',
      //   "style": 'btn-primaryOrange'
      // },
      {
        "title" : 'Read More',
        "style": 'blury-btn'
      }
    ]
  };
  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.router.url); 
    console.log(this.content,"sending");
    this.service.setShowHeader(false);
    window.scrollTo(0, 0);
  }

}
