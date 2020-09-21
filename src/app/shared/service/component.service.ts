import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private showHeader = new BehaviorSubject<boolean>(true);

  googleSheetUrl:string = environment.apiurl;

  constructor(private httpClient: HttpClient) { }

  sendPostRequest(data: Object): void {
    console.log(data);
    this.httpClient.get(this.googleSheetUrl+data).subscribe((res: any) => {
      console.log(res);
    });
  }

  setShowHeader(value){
    this.showHeader.next(value);
  }
  getShowHeader(){
    return this.showHeader.asObservable();
  }
}
