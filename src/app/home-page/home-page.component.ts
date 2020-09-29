import { Component, Inject, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../shared/service/component.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email: any;
  SelectedQuery: any;
  startIndex: number = 0;
  isErrors: boolean = false;
  static MessageContent: String;
  public homePageComponent = HomePageComponent;
  constructor(private router: Router, private service: ComponentService) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.service.setShowHeader(true);
    this.email = null;
    this.setEnquiryType('Select Enquiry type');
    this.isErrors = false;

  }
  setEnquiryType(type: string) {
    console.log(type)
    this.SelectedQuery = type;
  }
  submit() {
    if (this.email != null && this.SelectedQuery !== 'Select Enquiry type') {
      this.service.sendPostRequest('?DateTime=' + new Date().toJSON("yyyy/MM/dd__HH:mm") + '&Email=' + this.email + '&EnquiryType=' + this.SelectedQuery);
      HomePageComponent.setMessageContent("Thank You For Reaching Us !! Our Representative Will Contact You Within 24 Hrs");
      document.getElementById("content").style.color = 'green';
      document.getElementById("myModal").style.display = 'block';
      this.delay(3000).then(any => {
        this.closeModal();
        this.ngOnInit();
      });
    }
    else {
      HomePageComponent.setMessageContent("Error : Please Fill All The Details Properly This Would Help In Clear Communication.");
      this.isErrors = true;
      document.getElementById("content").style.color = 'red';
      document.getElementById("myModal").style.display = 'block';
      this.delay(3000).then(any => {
        this.closeModal();

      });
    }




  }
  private newMethod() {
    return this;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
  closeModal() {
    document.getElementById("myModal").style.display = 'none';
  }
  btnRoute(path) {
    this.router.navigate([]).then(result => { window.open(path, '_self'); });
  }
  static setMessageContent(data: String) {
    this.MessageContent = data;
  }


}




