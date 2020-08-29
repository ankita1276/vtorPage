import { Component, OnInit } from '@angular/core';

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
    "button": [
      {
        "title" : 'Visit Website',
        "style": 'btn-primaryOrange'
      },
      {
        "title" : 'Read More',
        "style": 'blur-btn'
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.content,"sending");
    
  }

}
