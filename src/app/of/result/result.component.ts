import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'result';
  heading = 'conclusion';
  bg = 'primary';
  result = 0;

  constructor() {
  }

  ngOnInit() {
    let one: string;
    let oneNumber: number;
    one = localStorage.getItem(OfScore.ONE);
    oneNumber = Number(localStorage.getItem(OfScore.ONE));
    this.result = this.result
      + Number(localStorage.getItem(OfScore.ONE))
      + Number(localStorage.getItem(OfScore.TWO))
      + Number(localStorage.getItem(OfScore.THREE))
      + Number(localStorage.getItem(OfScore.FOUR))
      + Number(localStorage.getItem(OfScore.FIVE))
      + Number(localStorage.getItem(OfScore.SIX))
      + Number(localStorage.getItem(OfScore.SEVEN));
  }

}
