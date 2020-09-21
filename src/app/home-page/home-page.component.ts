import { Component, Inject, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../shared/service/component.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email:any;
  SelectedQuery:any;
  startIndex: number=0;
  constructor(private router: Router,private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.router.url); 
    this.service.setShowHeader(true);
    this.SelectedQuery="Select Your Enquiry Type";
    this.Repeat();
  }
  setEnquiryType(type:string)
  {
    console.log(type)
     this.SelectedQuery=type;
  }
  submit(){
    console.log(this.email,"homeee");
    this.service.sendPostRequest('?DateTime='+new Date().toJSON("yyyy/MM/dd__HH:mm")+'&Email='+this.email+'&EnquiryType='+this.SelectedQuery);
    
  }
  btnRoute(path){
    this.router.navigate([]).then(result => {  window.open(path, '_self'); });
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 5000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('carousel-item'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  
}
@Component({
  selector: 'Modal',
  templateUrl: 'modal.html',
  styleUrls: ['./view.component.scss'],
})
export class Modal {
  constructor(
   
  
  ) {}
  confirm() {
    
  }
  onNoClick(): void {
     
  }
}