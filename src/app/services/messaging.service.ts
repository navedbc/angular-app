
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  subject = new Subject();

  constructor() {

  }

  sendMsg(product){
   this.subject.next(product);
  }

  getMesg() {
   return this.subject.asObservable();
  }



}
