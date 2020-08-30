import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private showHeader = new BehaviorSubject<boolean>(true);

  constructor() { }

  setShowHeader(value){
    this.showHeader.next(value);
  }
  getShowHeader(){
    return this.showHeader.asObservable();
  }
}
