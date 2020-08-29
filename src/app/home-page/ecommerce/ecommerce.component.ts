import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  content = {
    "bgImage":'ecommerce',
    "title": 'Multi-Vendor Ecommerce',
    'subTitle': 'Plug & Play Multi-Vendor online store with 24*7 Tech Support. So, you can focus on business while we take care of your store.',
    "getDetailsForm": true,
    "button": [
      {
        "title" : 'Read More',
        "style": 'blur-btn'
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
