import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DateService} from '../service/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // @ts-ignore
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });


  constructor(public dateService: DateService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showForm() {
    console.log(this.userForm);
  }
}
