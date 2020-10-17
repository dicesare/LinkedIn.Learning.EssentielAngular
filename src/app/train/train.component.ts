import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  private trainData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .subscribe(
      (value) => {
      this.trainData = value;
      }
    );
    timer(1000, 2000)
      .pipe(
        // tslint:disable-next-line:variable-name
        map(number => number + 1)
      )
      .subscribe(
        // tslint:disable-next-line:variable-name
        (number) => console.log(number)
      );
  }

}
