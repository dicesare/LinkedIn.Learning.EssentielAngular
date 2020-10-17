import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  date = new Date();
  user = 'nino';
  elements = [1, 2, 3, 4];
  color = true;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  userClic() {
    console.log('tu viens de cliquer');
  }
}
