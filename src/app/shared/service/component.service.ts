import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private showHeader = new BehaviorSubject<boolean>(true);

  googleSheetUrl = "/script.google.com/macros/s/AKfycbz8K74fRaRgO96JTb6uBN6-_4pXMpfnCDWahFtrciU4jd06ycnh/exec"

  constructor(private httpClient: HttpClient) { }

  sendPostRequest(data: Object): Observable<Object> {
    return this.httpClient.get(this.googleSheetUrl, data);
  }

  setShowHeader(value){
    this.showHeader.next(value);
  }
  getShowHeader(){
    return this.showHeader.asObservable();
  }
}
