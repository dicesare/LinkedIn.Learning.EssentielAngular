import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date = new Date();
  constructor() { }
  // tslint:disable-next-line:typedef
  getDate(){
    return new Date();
  }
}
